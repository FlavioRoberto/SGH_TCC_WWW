import { Injectable, Inject } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';
import { Observable } from 'rxjs';
import { CurriculoModel } from '../model/curriculo.model';
import { CurriculoDisciplinaModel } from '../model/curriculo-disciplina.model';
import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { CargoModel } from '../../cargos/cargo/models/cargo.model';
import { ListarCargoCurriculoModel } from '../model/listar-cargo.model';

@Injectable({
    providedIn: 'root'
})
export class CurriculoService extends BaseService<CurriculoModel>{

    private _rotaDisciplina = `${this.getRota().base}/disciplinas`;

    protected getRota(): any {
        return new RoutesApi().getRoutes().curriculo;
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

    listarCargos(listarCargoCurriculo: ListarCargoCurriculoModel): Observable<CargoModel[]> {
        return this.post(listarCargoCurriculo, `${this.getRota().base}/${listarCargoCurriculo.codigoCurriculo}/cargos`);
    }

}
