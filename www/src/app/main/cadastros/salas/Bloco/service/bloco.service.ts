import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/core/services/base.service';
import { BlocoModel } from '../model/bloco.model';

@Injectable({
    providedIn: 'root'
})
export class BlocoService extends BaseService<BlocoModel>{
    getRota(): string {
        return new routesApi().getRoutes().bloco;
    }
}
