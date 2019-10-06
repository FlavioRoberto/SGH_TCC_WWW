import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { FormGroup } from '@angular/forms';
import { DisciplinaService } from './disciplina.service';
import { IDisciplina } from '../model/IDisciplina';
import { Observable } from 'rxjs';
import { DisciplinaPaginado } from '../model/disciplina.paginacao';
import { EventEmitter } from '@angular/core';

export class DisciplinaDataBarService implements IDataBarBindService<IDisciplina> {

    onClickEnter: EventEmitter<IDisciplina>;

    constructor(public formgroup: FormGroup, private _servicoDisciplina: DisciplinaService) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): IDisciplina {
        return this.formgroup.getRawValue();
    }

    criar(): Observable<IDisciplina> {
        return this._servicoDisciplina.criar(this.getEntidade())
    }

    listarPaginacao(paginacao: DisciplinaPaginado): Observable<DisciplinaPaginado> {
        return this._servicoDisciplina.listarPaginacao(paginacao);
    }

    editar(): Observable<IDisciplina> {
        return this._servicoDisciplina.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._servicoDisciplina.remover(this.getEntidade().codigo);
    }
}