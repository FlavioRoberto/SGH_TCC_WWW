import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/routes.api';
import { environment } from 'environments/environment';
import { ITurno } from '../model/turno.interface';

const API = environment.url;

@Injectable({
    providedIn: 'root'
})
export class TurnoService {
    private routes: any = API + routesApi.Turno;
    constructor(private http: HttpClient) {}

    listarPeloCodigo(codigo: number): Observable<ITurno[]> {
        return this.http.get<ITurno[]>(
            this.routes.listarPeloCodigo + '/' + codigo
        );
    }
}
