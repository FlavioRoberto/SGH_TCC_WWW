import { Injectable } from "@angular/core";
import { HttpBaseService } from "app/core/services/http-base.service";
import { RoutesApi } from "app/routes/api.routes";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AdicionarAulaBaseDataModel } from "./adicionar-aula-data-base.model";

@Injectable()
export class AdicionarAulaBaseService extends HttpBaseService<any> {
    private _rotaCargoDisciplina = new RoutesApi().getRoutes().cargo
        .disciplinas;

    constructor(private _httpClient: HttpClient) {
        super(_httpClient);
    }

    listarDisciplinas<T>(
        filtro: AdicionarAulaBaseDataModel
    ): Observable<T[]> {
        return this.post(filtro, this._rotaCargoDisciplina.listarPorCurriculo);
    }
}
