import { Injectable } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private autenticacaoServico: AutenticacaoService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.autenticacaoServico.estaLogado()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}