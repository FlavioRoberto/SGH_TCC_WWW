import { BaseService } from 'app/core/services/base.service';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/iusuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends BaseService<UsuarioModel>{
    getRota(): string {
        return new routesApi().getRoutes().usuario;
    }
}
