import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITurno } from 'app/main/gerenciamento/turno/model/turno.interface';
import { IDataEntidadePaginada } from './IDataEntidadePaginada';

export interface IDataBarBind<T> extends OnInit {
    Criar(): Observable<T>;
    ListarPaginacao(): Observable<IDataEntidadePaginada<T>>;
    Editar(): Observable<T>;
    Remover(): Observable<any>;
}