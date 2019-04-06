import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/routes.api';
import { ITurno } from 'app/main/gerenciamento/turno/model/turno.interface';
import { Observable } from 'rxjs';
import { url } from 'inspector';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService<T> {
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

    protected post(entidade: T, rota: string) {
        console.log(JSON.stringify(entidade));
        return this.http.post(
            rota,
            JSON.stringify(entidade),
            {
                headers: this.headers_object
            }
        );
    }

}
