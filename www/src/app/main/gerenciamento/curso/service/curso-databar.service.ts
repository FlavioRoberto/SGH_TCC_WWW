import { FormGroup } from '@angular/forms';
import { CursoService } from './curso.service';
import { Observable } from 'rxjs';
import { ICurso } from '../model/curso.model';
import { CursoPaginado } from '../model/curso.paginacao';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';

export class CursoDataBarService implements IDataBarBindService<ICurso>{

    constructor(public formgroup: FormGroup, private _servico: CursoService) {
    }

    private _getCurso(): ICurso {
        return this.formgroup.getRawValue() as ICurso;
    }

    criar(): Observable<ICurso> {
        return this._servico.criar(this._getCurso());
    }

    listarPaginacao(paginacao: CursoPaginado): Observable<CursoPaginado> {
        return this._servico.listarPaginacao(paginacao);
    }

    editar(): Observable<ICurso> {
        return this._servico.editar(this._getCurso());
    }

    remover(): Observable<any> {
        return this._servico.remover(this._getCurso().codigo);
    }

}