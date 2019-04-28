import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITurno } from 'app/main/gerenciamento/turno/model/turno.interface';
import { IDataEntidadePaginada } from './IDataEntidadePaginada';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface IDataBarBind<T> extends OnInit {
    statusChanged(status: string): void;
    criar(): Observable<T>;
    listarPaginacao(paginacao: IDataEntidadePaginada<T>): Observable<IDataEntidadePaginada<T>>;
    editar(): Observable<T>;
    remover(): Observable<any>;
    acoesViewModel: IDataBarBind<T>;
    form: FormGroup;
    entidadePaginada: IDataEntidadePaginada<T>;
    statusNavBar: string
}