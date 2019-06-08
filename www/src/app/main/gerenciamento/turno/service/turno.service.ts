import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService<ITurno>{
    getRota(): string {
        return new routesApi().getRoutes().turno;
    }
}
