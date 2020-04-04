import { TipoModel } from '../model/ITipo';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaTipoService extends BaseService<TipoModel>{
    getRota(): any {
        return new routesApi().getRoutes().disciplina.tipo;
    }
}