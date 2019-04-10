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
        this.headers_object = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers':
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        });
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

    protected put(entidade: T, rota: string): Observable<T> {
        return this.http.put<T>(
            rota,
            JSON.stringify(entidade),
            {
                headers: this.headers_object
            });
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(url);
    }
}
