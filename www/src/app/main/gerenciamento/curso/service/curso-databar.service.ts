import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';

import { ICurso } from '../model/curso.model';
import { CursoPaginado } from '../model/curso.paginacao';
import { CursoService } from './curso.service';

export class CursoDataBarService implements IDataBarBindService<ICurso>{

    onClickEnter: EventEmitter<ICurso> = new EventEmitter();

    constructor(public formgroup: FormGroup, private _servico: CursoService) {
    }

    enviarFormComEnter() {
        this.onClickEnter.emit(this.getEntidade());
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