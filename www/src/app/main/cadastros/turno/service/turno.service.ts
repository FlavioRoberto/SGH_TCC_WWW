import { Injectable } from '@angular/core';
import { TurnoModel } from '../model/turno.interface';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService<TurnoModel>{
    getRota(): string {
        return new RoutesApi().getRoutes().turno;
    }
}
