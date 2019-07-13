import { FormGroup } from '@angular/forms';
import { CursoService } from './curso.service';
import { Observable } from 'rxjs';
import { ICurso } from '../model/curso.model';
import { CursoPaginado } from '../model/curso.paginacao';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';

export class CursoDataBarService implements IDataBarBindService<ICurso>{
    onClickEnter: import("@angular/core").EventEmitter<ICurso>;

    constructor(public formgroup: FormGroup, private _servico: CursoService) {
    }

    getEntidade(): ICurso {
        return this.formgroup.getRawValue() as ICurso;
    }

    criar(): Observable<ICurso> {
        return this._servico.criar(this.getEntidade());
    }

    listarPaginacao(paginacao: CursoPaginado): Observable<CursoPaginado> {
        return this._servico.listarPaginacao(paginacao);
    }

    editar(): Observable<ICurso> {
        return this._servico.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._servico.remover(this.getEntidade().codigo);
    }

}