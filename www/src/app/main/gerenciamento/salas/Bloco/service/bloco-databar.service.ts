import { EventEmitter, Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EStatus, IDataEntidadePaginada, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';
import { BlocoModel } from '../model/bloco.model';
import { Observable } from 'rxjs';
import { BlocoService } from './bloco.service';

export class BlocoDatabarService implements IDatabarBindOnClickService<BlocoModel> {

    onClickEnter: EventEmitter<BlocoModel>;
    status: EStatus;
    eventDatabar: DatabarEventClickService;

    constructor(public formgroup: FormGroup, private _servico: BlocoService) {
        this.onClickEnter = new EventEmitter();

        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.afterClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    getEntidade(): BlocoModel {
        return this.formgroup.getRawValue() as BlocoModel;
    }

    criar(): Observable<BlocoModel> {
        return this._servico.criar(this.getEntidade());
    }

    editar(): Observable<BlocoModel> {
        return this._servico.editar(this.getEntidade());
    }

    remover(): Observable<BlocoModel> {
        return this._servico.remover(this.getEntidade().codigo);
    }

    listarPaginacao(entidadePaginada: IDataEntidadePaginada<BlocoModel>): Observable<IDataEntidadePaginada<BlocoModel>> {
        console.log(this._servico);
        return this._servico.listarPaginacao(entidadePaginada);
    }

}
