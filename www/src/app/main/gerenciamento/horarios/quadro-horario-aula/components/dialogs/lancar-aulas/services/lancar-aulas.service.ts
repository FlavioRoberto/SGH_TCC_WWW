import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpBaseService } from "app/core/services/http-base.service";
import { RoutesApi } from "app/routes/api.routes";
import { LancarAulaModel } from "../models/lancar-aula.model";

@Injectable()
export class LancarAulaService extends HttpBaseService<any> {
    private _rotaAula = new RoutesApi().getRoutes().aula;

    constructor(private _httpClient: HttpClient) {
        super(_httpClient);
    }

    lancarAula(reservas: LancarAulaModel): Observable<any> {
        return this._httpClient.post(this._rotaAula.lancar, reservas);
    }
}
