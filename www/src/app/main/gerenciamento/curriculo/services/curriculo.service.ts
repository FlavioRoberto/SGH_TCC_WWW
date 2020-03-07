import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';

@Injectable({
    providedIn: 'root'
})
export class CurriculoService extends BaseService<Curriculo>{

    private _rotaDisciplina = `${this.getRota().base}/disciplinas`;

    public getRota(): any {
        return new routesApi().getRoutes().curriculo;
    }

    listarDisciplinas(codigoCurriculo: number): Observable<ICurriculoDisciplina[]> {
        return this.getAll(`${this._rotaDisciplina}/${codigoCurriculo}`);
    }

    adicionarDisciplina(disciplina: ICurriculoDisciplina): Observable<ICurriculoDisciplina> {
        return this.post<ICurriculoDisciplina>(disciplina, `${this._rotaDisciplina}`);
    }

    removerDisciplina(disciplinaId: number): Observable<boolean> {
        return this.delete(`${this._rotaDisciplina}/${disciplinaId}`);
    }

}
