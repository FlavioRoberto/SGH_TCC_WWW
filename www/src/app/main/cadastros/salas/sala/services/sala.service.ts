import { Injectable } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';
import { SalaModel } from '../model/sala.model';

@Injectable({
    providedIn: 'root'
})
export class SalaService extends BaseService<SalaModel>{
    getRota(): string {
        return new RoutesApi().getRoutes().sala;
    }
}
