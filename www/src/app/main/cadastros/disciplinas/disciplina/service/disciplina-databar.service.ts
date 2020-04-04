import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';

import { DisciplinaService } from './disciplina.service';
import { DisciplinaPaginado } from '../model/disciplina.paginacao';
import { DisciplinaModel } from '../model/disciplina';

export class DisciplinaDataBarService implements IDatabarBindOnClickService<DisciplinaModel> {
    eventDatabar: DatabarEventClickService;
    status: EStatus;

    onClickEnter: EventEmitter<DisciplinaModel>;

    constructor(public formgroup: FormGroup, private _servicoDisciplina: DisciplinaService) {
        this.onClickEnter = new EventEmitter();
        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.afterClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): DisciplinaModel {
        return this.formgroup.getRawValue();
    }

    criar(): Observable<DisciplinaModel> {
        return this._servicoDisciplina.criar(this.getEntidade())
    }

    listarPaginacao(paginacao: DisciplinaPaginado): Observable<DisciplinaPaginado> {
        return this._servicoDisciplina.listarPaginacao(paginacao);
    }

    editar(): Observable<DisciplinaModel> {
        return this._servicoDisciplina.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._servicoDisciplina.remover(this.getEntidade().codigo);
    }
}