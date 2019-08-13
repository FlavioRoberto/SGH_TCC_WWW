import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { Observable } from 'rxjs';
import { ICurriculo } from '../model/curriculo.model';

@Injectable({
    providedIn: 'root'
})
export class CurriculoService extends BaseService<ICurriculo>{

    public getRota(): any {
        return new routesApi().getRoutes().curriculo;
    }

}
