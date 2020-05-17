import { Injectable } from '@angular/core';
import { BaseService } from 'app/core/services/base.service';
import { CargoModel } from '../models/cargo.model';
import { RoutesApi } from 'app/routes/api.routes';
import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { Observable } from 'rxjs';
import { CargoDisciplinaModel } from '../models/cargo-disciplina.model';

@Injectable()
export class CargoService extends BaseService<CargoModel>{

    private _rotaDisciplina = `${this.getRota().base}/disciplinas`;

    protected getRota(): any {
        return new RoutesApi().getRoutes().cargo;
    }

    listarSemestres(): ESemestre[] {
        return [ESemestre.Primeiro, ESemestre.Segundo];
    }

    adicionarDisciplina(disciplina: CargoDisciplinaModel): Observable<CargoDisciplinaModel> {
        return this.post<CargoDisciplinaModel>(disciplina, `${this._rotaDisciplina}`);
    }

    editarDisciplina(disciplina: CargoDisciplinaModel): Observable<CargoDisciplinaModel> {
        return this.put<CargoDisciplinaModel>(disciplina, `${this._rotaDisciplina}`);
    }
    
    removerDisciplina(disciplinaId: number): Observable<boolean> {
        return this.delete(`${this._rotaDisciplina}/${disciplinaId}`);
    }

    listarDisciplinas(codigoCargo: number): Observable<CargoDisciplinaModel[]> {
        return this.getAll(`${this.getRota().base}/disciplinas/${codigoCargo}`);
    }
}

