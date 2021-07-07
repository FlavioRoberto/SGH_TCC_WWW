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

    getHorarios(): string[] {
        return [
            '07:00',
            '07:50',
            '08:40',
            '09:30',
            '09:45',
            '10:35',
            '11:25',
            '13:00',
            '13:50',
            '14:40',
            '15:30',    
            '15:45',
            '16:35',
            '17:25',
            '18:30',
            '19:20',
            '20:10',
            '20:25',
            '21:15',
            '22:05'
        ];
    }
}
