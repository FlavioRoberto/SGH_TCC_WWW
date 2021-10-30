import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpBaseService } from "app/core/services/http-base.service";
import { RoutesApi } from "app/routes/api.routes";

@Injectable()
export class VincularSalaService extends HttpBaseService<any> {
    private _rotaAula = new RoutesApi().getRoutes().aula;

    constructor(private _httpClient: HttpClient) {
        super(_httpClient);
    }

    vincular(salaId: number, aulaId: number): Observable<any> {
        return this._httpClient.put(this._rotaAula.definirSala, {
            aulaId,
            salaId
        });
    }
}
