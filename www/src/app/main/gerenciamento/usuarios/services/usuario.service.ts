import { BaseService } from '@compartilhado/services/base.service';
import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends BaseService<IUsuario>{
    getRota(): string {
        return new routesApi().getRoutes().usuario;
    }
}
