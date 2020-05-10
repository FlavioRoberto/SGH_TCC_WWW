import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { AdicionarAulaDialogDataModel } from '../models/adicionar-aula-dialog-data.model';
import { RoutesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';
import { AdicionarAulaDisciplinaModel } from '../models/adicionar-aula-disciplina..model';
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


    listarDisciplinas(filtro: AdicionarAulaDialogDataModel): Observable<AdicionarAulaDisciplinaModel[]> {
        console.log(this._rotaCargoDisciplina);
        return this.post(filtro, this._rotaCargoDisciplina.listarPorCurriculo);
    }

    criarAula(aulaModel: AulaModel): Observable<AulaModel> {
        return this._quadroHorarioService.criarAula(aulaModel);
    }
}
