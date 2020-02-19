import { FormGroup } from '@angular/forms';
import { DisciplinaService } from './disciplina.service';
import { Observable } from 'rxjs';
import { DisciplinaPaginado } from '../model/disciplina.paginacao';
import { EventEmitter } from '@angular/core';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';
import { Disciplina } from '../model/disciplina';

export class DisciplinaDataBarService implements IDataBarBindService<Disciplina> {
    status: EStatus;

    onClickEnter: EventEmitter<Disciplina>;

    constructor(public formgroup: FormGroup, private _servicoDisciplina: DisciplinaService) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): Disciplina {
        return this.formgroup.getRawValue();
    }

    criar(): Observable<Disciplina> {
        return this._servicoDisciplina.criar(this.getEntidade())
    }

    listarPaginacao(paginacao: DisciplinaPaginado): Observable<DisciplinaPaginado> {
        return this._servicoDisciplina.listarPaginacao(paginacao);
    }

    editar(): Observable<Disciplina> {
        return this._servicoDisciplina.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._servicoDisciplina.remover(this.getEntidade().codigo);
    }
}