import { Injectable } from '@angular/core';
import { TurnoModel } from '../model/turno.interface';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService<TurnoModel>{
    getRota(): string {
        return new routesApi().getRoutes().turno;
    }
}
