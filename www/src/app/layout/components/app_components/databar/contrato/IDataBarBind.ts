import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITurno } from 'app/main/gerenciamento/turno/model/turno.interface';
import { IDataEntidadePaginada } from './IDataEntidadePaginada';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface IDataBarBind<T> extends OnInit {
    statusChanged(status: string): void;
    Criar(): Observable<T>;
    ListarPaginacao(paginacao: IDataEntidadePaginada<T>): Observable<IDataEntidadePaginada<T>>;
    Editar(): Observable<T>;
    Remover(): Observable<any>;
    acoesViewModel: IDataBarBind<T>;
    form: FormGroup;
    entidadePaginada: IDataEntidadePaginada<T>;
    statusNavBar: string
}