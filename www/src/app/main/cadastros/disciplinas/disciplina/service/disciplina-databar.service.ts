import { FormGroup } from '@angular/forms';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';

import { DisciplinaService } from './disciplina.service';
import { DisciplinaPaginado } from '../model/disciplina.paginacao';
import { DisciplinaModel } from '../model/disciplina';
import { DisciplinaFormularioService } from './disciplina-formulario.service';

@Injectable()
export class DisciplinaDataBarService implements IDatabarBindOnClickService<DisciplinaModel> {
    eventDatabar: DatabarEventClickService;
    status: EStatus;
    formgroup: FormGroup;
    onClickEnter: EventEmitter<DisciplinaModel>;

    constructor(
        private _formularioService: DisciplinaFormularioService,
        private _servicoDisciplina: DisciplinaService) {

        this.onClickEnter = new EventEmitter();
        this.formgroup = this._formularioService.form;
        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.afterClickEditar: this._formularioService.PrepararCampoAposEdicao(); break;
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