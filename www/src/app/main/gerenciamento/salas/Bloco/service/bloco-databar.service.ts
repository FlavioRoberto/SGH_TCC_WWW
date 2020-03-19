import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IDataBarBindService, EStatus, IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { BlocoModel } from '../model/bloco.model';
import { Observable } from 'rxjs';

export class BlocoDatabarService implements IDataBarBindService<BlocoModel> {

    onClickEnter: EventEmitter<BlocoModel>;
    status: EStatus;

    constructor(public formGroup: FormGroup) {
        this.onClickEnter = new EventEmitter();
    }
    
    formgroup: FormGroup;

    getEntidade(): BlocoModel {
        throw new Error("Method not implemented.");
    }

    criar(): Observable<BlocoModel> {
        throw new Error("Method not implemented.");
    }

    editar(): Observable<BlocoModel> {
        throw new Error("Method not implemented.");
    }

    remover(): Observable<BlocoModel> {
        throw new Error("Method not implemented.");
    }

    listarPaginacao(entidadePaginada: IDataEntidadePaginada<BlocoModel>): Observable<IDataEntidadePaginada<BlocoModel>> {
        throw new Error("Method not implemented.");
    }

}
