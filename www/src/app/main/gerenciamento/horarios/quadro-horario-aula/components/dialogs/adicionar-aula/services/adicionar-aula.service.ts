import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { RoutesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';
import { QuadroHorarioAulaService } from '../../../../services/quadro-horario-aula.service';
import { HttpClient } from '@angular/common/http';
import { AulaModel } from '../../../../model/aula.model';

@Injectable()
export class AdicionarAulaService extends HttpBaseService<any> {

    private _rotaCargoDisciplina = new RoutesApi().getRoutes().cargo.disciplinas;

    constructor(
        private _quadroHorarioService: QuadroHorarioAulaService,
        private _httpClient: HttpClient) {
        super(_httpClient);
    }

    criarAula(aulaModel: AulaModel): Observable<AulaModel> {
        return this._quadroHorarioService.criarAula(aulaModel);
    }
}
