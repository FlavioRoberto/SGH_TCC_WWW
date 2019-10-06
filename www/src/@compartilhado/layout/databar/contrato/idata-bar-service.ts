import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';

export interface IDataBarBindService<T> {
    formgroup: FormGroup;
    onClickEnter: EventEmitter<T>;

    getEntidade(): T;
    criar(): Observable<T>;
    editar(): Observable<T>;
    remover(): Observable<T>;
    listarPaginacao(
        entidadePaginada: IDataEntidadePaginada<T>
    ): Observable<IDataEntidadePaginada<T>>;
}
