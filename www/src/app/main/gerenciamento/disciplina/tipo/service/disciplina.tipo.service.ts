import { ITipo } from '../model/ITipo';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/compartilhado/services/base.service';
import { routesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaTipoService extends BaseService<ITipo>{
    getRota(): any {
        return new routesApi().getRoutes().disciplina.tipo;
    }
}