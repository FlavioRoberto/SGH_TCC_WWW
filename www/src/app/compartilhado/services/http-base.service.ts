import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/routes.api';
import { Observable } from 'rxjs';
import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';

@Injectable({
    providedIn: 'root'
})
export abstract class HttpBaseService<T> {
    protected rota: any;
    protected headers_object;

    constructor(protected http: HttpClient) {
        this.rota = new routesApi().getRoutes();
        this.headers_object = new HttpHeaders()
            .append('Content-Type', 'application/json');
    }


    protected getAll(rota: string): Observable<T[]> {
        console.log('fazendo requisicao...', rota)
        return this.http.get<T[]>(rota, {
            headers: this.headers_object
        });
    }

    protected post(entidade: T, rota: string): Observable<T> {
        return this.http.post<T>(
            rota,
            JSON.stringify(entidade),
            {
                headers: this.headers_object
            }
        );
    }

    protected postPaginacao(entidade: IDataEntidadePaginada<T>, rota: string): Observable<IDataEntidadePaginada<T>> {
        return this.http.post<IDataEntidadePaginada<T>>(
            rota,
            JSON.stringify(entidade),
            {
                headers: this.headers_object
            }
        );
    }

}