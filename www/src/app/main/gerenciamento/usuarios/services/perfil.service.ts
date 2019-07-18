import { BaseService } from '@compartilhado/services/base.service';
import { IPerfil } from '../models/iperfil';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PerfilService extends BaseService<IPerfil>{
    getRota(): string {
        return new routesApi().getRoutes().perfil;
    }
}
