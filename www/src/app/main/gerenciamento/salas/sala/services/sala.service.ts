import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { SalaModel } from '../model/sala.model';

@Injectable({
    providedIn: 'root'
})
export class SalaService extends BaseService<SalaModel>{
    getRota(): string {
        return new routesApi().getRoutes().sala;
    }
}
