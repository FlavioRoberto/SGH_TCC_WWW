import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/core/services/base.service';
import { Observable } from 'rxjs';
import { CurriculoModel } from '../model/curriculo.model';
import { CurriculoDisciplinaModel } from '../model/curriculo-disciplina.model';

@Injectable({
    providedIn: 'root'
})
export class CurriculoService extends BaseService<CurriculoModel>{

    private _rotaDisciplina = `${this.getRota().base}/disciplinas`;

    public getRota(): any {
        return new routesApi().getRoutes().curriculo;
    }

    listarDisciplinas(codigoCurriculo: number): Observable<CurriculoDisciplinaModel[]> {
        return this.getAll(`${this._rotaDisciplina}/${codigoCurriculo}`);
    }

    adicionarDisciplina(disciplina: CurriculoDisciplinaModel): Observable<CurriculoDisciplinaModel> {
        return this.post<CurriculoDisciplinaModel>(disciplina, `${this._rotaDisciplina}`);
    }

    editarDisciplina(disciplina: CurriculoDisciplinaModel): Observable<CurriculoDisciplinaModel> {
        return this.put<CurriculoDisciplinaModel>(disciplina, `${this._rotaDisciplina}`);
    }

    removerDisciplina(disciplinaId: number): Observable<boolean> {
        return this.delete(`${this._rotaDisciplina}/${disciplinaId}`);
    }

}
