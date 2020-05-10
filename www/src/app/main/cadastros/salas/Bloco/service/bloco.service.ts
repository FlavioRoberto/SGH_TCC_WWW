import { Injectable } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';
import { BlocoModel } from '../model/bloco.model';

@Injectable({
    providedIn: 'root'
})
export class BlocoService extends BaseService<BlocoModel>{
    getRota(): string {
        return new RoutesApi().getRoutes().bloco;
    }
}
