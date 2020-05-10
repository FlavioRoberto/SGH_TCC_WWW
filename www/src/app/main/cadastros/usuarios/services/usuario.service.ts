import { BaseService } from 'app/core/services/base.service';
import { RoutesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/iusuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends BaseService<UsuarioModel>{
    getRota(): string {
        return new RoutesApi().getRoutes().usuario;
    }
}
