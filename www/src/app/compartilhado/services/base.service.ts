import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/routes.api';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService {
    protected rota: any;

    constructor(protected http: HttpClient) {
        this.rota = new routesApi().getRoutes().turno;
    }
 
}
