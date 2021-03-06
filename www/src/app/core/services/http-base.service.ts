import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

@Injectable({
    providedIn: 'root'
})
export abstract class HttpBaseService<T> {

    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    protected getAll<T>(rota: string): Observable<T[]> {
        return this.http.get<T[]>(rota);
    }

    protected post<T>(entidade: any, rota: string): Observable<T> {
        return this.http.post<T>(
            rota,
            JSON.stringify(entidade)
        );
    }

    protected postPaginacao(entidade: IDataEntidadePaginada<T>, rota: string): Observable<IDataEntidadePaginada<T>> {
        return this.http.post<IDataEntidadePaginada<T>>(
            rota,
            JSON.stringify(entidade)
        );
    }

    protected put<T>(entidade: T, rota: string): Observable<T> {
        return this.http.put<T>(
            rota,
            JSON.stringify(entidade));
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(url);
    }
}
