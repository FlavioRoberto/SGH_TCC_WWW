import { TipoModel } from '../model/ITipo';
import { Injectable } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaTipoService extends BaseService<TipoModel>{
    getRota(): any {
        return new RoutesApi().getRoutes().disciplina.tipo;
    }
}