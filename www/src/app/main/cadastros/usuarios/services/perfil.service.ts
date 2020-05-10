import { BaseService } from 'app/core/services/base.service';
import { PerfilModel } from '../models/iperfil';
import { RoutesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PerfilService extends BaseService<PerfilModel>{
    getRota(): string {
        return new RoutesApi().getRoutes().perfil;
    }
}
