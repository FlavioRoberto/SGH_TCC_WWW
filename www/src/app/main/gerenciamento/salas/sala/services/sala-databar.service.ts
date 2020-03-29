import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataBarBindService, EStatus, IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { SalaModel } from '../model/sala.model';

export class SalaDatabarService implements IDataBarBindService<SalaModel> {
    formgroup: FormGroup;
    onClickEnter: EventEmitter<SalaModel>;
    status: EStatus;

    constructor() {
        this.onClickEnter = new EventEmitter();
    }

    getEntidade(): SalaModel {
        throw new Error("Method not implemented.");
    }

    criar(): Observable<SalaModel> {
        throw new Error("Method not implemented.");
    }

    editar(): Observable<SalaModel> {
        throw new Error("Method not implemented.");
    }

    remover(): Observable<SalaModel> {
        throw new Error("Method not implemented.");
    }

    listarPaginacao(entidadePaginada: IDataEntidadePaginada<SalaModel>): Observable<IDataEntidadePaginada<SalaModel>> {
        throw new Error("Method not implemented.");
    }

}
