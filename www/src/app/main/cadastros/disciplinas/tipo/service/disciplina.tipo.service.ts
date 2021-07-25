import { Injectable } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';
import { TipoModel } from '../model/iTipo';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaTipoService extends BaseService<TipoModel>{
    getRota(): any {
        return new RoutesApi().getRoutes().disciplina.tipo;
    }
}