import { ITipo } from '../model/ITipo';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/compartilhado/services/base.service';
import { routesApi } from 'app/routes/routes.api';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaTipoServiceo extends BaseService<ITipo>{
    getRota(): string {
        return new routesApi().getRoutes().disciplina.tipo;
    }
}