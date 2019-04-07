import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

export interface IDataBarBind extends OnInit {
    Criar(): void;
    ListarPaginacao(): void;
    ListarProximo(): void;
    ListarAnterior(): void;
    Primeiro(): void;
    Ultimo(): void;
}