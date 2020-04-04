import { BaseService } from 'app/core/services/base.service';
import { PerfilModel } from '../models/iperfil';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PerfilService extends BaseService<PerfilModel>{
    getRota(): string {
        return new routesApi().getRoutes().perfil;
    }
}
