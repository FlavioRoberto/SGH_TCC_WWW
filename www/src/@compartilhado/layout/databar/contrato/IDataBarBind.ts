import { OnInit } from '@angular/core';
import { IDataEntidadePaginada } from './IDataEntidadePaginada';
import { FormGroup } from '@angular/forms';
import { IDataBarBindService } from './IDataBarService';

export interface IDataBarBindComponent<T> extends OnInit {
    statusChanged(status: string): void;
    form: FormGroup;
    entidadePaginada: IDataEntidadePaginada<T>;
    statusNavBar: string,
    servicoDataBarBind: IDataBarBindService<T>;
}