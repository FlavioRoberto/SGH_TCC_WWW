import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    constructor(private _servicoAutenticacao: AutenticacaoService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._servicoAutenticacao.estaLogado()) {
            this.router.navigate(['inicio']);
            return false;
        }
        return true;
    }
}
