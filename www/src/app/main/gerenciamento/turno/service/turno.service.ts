import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { BaseService } from 'app/compartilhado/services/base.service';
import { routesApi } from 'app/routes/api.routes';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService<ITurno>{
    getRota(): string {
        return new routesApi().getRoutes().turno;
    }
}
