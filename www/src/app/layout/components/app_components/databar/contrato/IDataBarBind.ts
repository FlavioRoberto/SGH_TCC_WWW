import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDataBarBind<T> extends OnInit {
    Criar(): void;
    ListarPaginacao(): void;
    Editar(): void;
    Remover(): Observable<any>;
}