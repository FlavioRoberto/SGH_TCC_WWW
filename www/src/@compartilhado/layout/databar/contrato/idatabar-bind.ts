import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IDataEntidadePaginada } from './idatabar-entidade-paginada';
import { IDataBarBindService } from './idata-bar-service';

export interface IDataBarBindComponent<T> {
    form: FormGroup;
    entidadePaginada: IDataEntidadePaginada<T>;
    statusNavBar: string;
    servicoDataBarBind: IDataBarBindService<T>;

    statusChanged(status: string): void;
}
