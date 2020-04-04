import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PerfilService } from 'app/main/cadastros/usuarios/services/perfil.service';
import { PerfilModel } from 'app/main/cadastros/usuarios/models/iperfil';

@Injectable()
export class PerfilResolver implements Resolve<PerfilModel[]> {

    constructor(private perfilService: PerfilService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<PerfilModel[]> {
        return this.perfilService.listarTodos();
    }
}
