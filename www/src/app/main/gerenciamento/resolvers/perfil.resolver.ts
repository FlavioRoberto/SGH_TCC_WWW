import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { IPerfil } from '../usuarios/models/iperfil';
import { PerfilService } from '../usuarios/services/perfil.service';
import { Observable } from 'rxjs';

@Injectable()
export class PerfilResolver implements Resolve<IPerfil[]> {

    constructor(private perfilService: PerfilService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<IPerfil[]> {
        return this.perfilService.listarTodos();
    }
}
