import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

export interface IDataBarBind<T> extends OnInit {
    Criar(): void;
    ListarPaginacao(): void;

}