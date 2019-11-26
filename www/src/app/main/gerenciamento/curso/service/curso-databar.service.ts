import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { ICurso } from '../model/curso.model';
import { CursoPaginado } from '../model/curso.paginacao';
import { CursoService } from './curso.service';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';

export class CursoDataBarService implements IDataBarBindService<ICurso>{
    status: EStatus;

    onClickEnter: EventEmitter<ICurso> = new EventEmitter();

    constructor(public formgroup: FormGroup, private _servico: CursoService) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
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