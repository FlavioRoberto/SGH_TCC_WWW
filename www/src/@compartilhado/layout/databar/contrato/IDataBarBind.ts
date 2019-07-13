import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IDataEntidadePaginada } from './IDataEntidadePaginada';
import { IDataBarBindService } from './IDataBarService';

export interface IDataBarBindComponent<T> extends OnInit {
    form: FormGroup;
    entidadePaginada: IDataEntidadePaginada<T>;
    statusNavBar: string;
    servicoDataBarBind: IDataBarBindService<T>;

    statusChanged(status: string): void;
}
