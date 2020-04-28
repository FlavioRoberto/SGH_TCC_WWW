import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { AdicionarAulaDialogDataModel } from '../models/adicionar-aula-dialog-data.model';
import { routesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';
import { AdicionarAulaDisciplinaModel } from '../models/adicionar-aula-disciplina..model';

@Injectable()
export class AdicionarAulaService extends HttpBaseService<any> {

    private _rotaCargoDisciplina = new routesApi().getRoutes().cargo.disciplinas;

    listarDisciplinas(filtro: AdicionarAulaDialogDataModel): Observable<AdicionarAulaDisciplinaModel[]> {
        console.log(this._rotaCargoDisciplina);
        return this.post(filtro, this._rotaCargoDisciplina.listarPorCurriculo);
    }
}
