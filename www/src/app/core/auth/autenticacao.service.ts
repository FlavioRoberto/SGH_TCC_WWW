import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { TokenStorageService } from './token/token-storage.service';
import { UsuarioStorageService } from './usuario/usuario-storage.service';
import { UsuarioAutenticacaoModel } from './usuario/model/IUsuario.model';



@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    jwtHelper = new JwtHelperService();

    constructor(private tokenStorageService: TokenStorageService,
        private usuarioStorage: UsuarioStorageService,
        private _router: Router) { }

    setToken(token: string): void {
        this.tokenStorageService.setToken(token);
        const usuarioDoToken = this.jwtHelper.decodeToken(token) as UsuarioAutenticacaoModel;
        this.usuarioStorage.setUsuario(usuarioDoToken);
    }

    getToken(): string {
        return this.tokenStorageService.getToken();
    }

    setUsuario(usuario: UsuarioAutenticacaoModel): void {
        this.usuarioStorage.setUsuario(usuario);
    }

    getUsuario(): UsuarioAutenticacaoModel {
        return this.usuarioStorage.getUsuario();
    }

    logout(): void {
        this.tokenStorageService.removerToken();
        this.usuarioStorage.removerUsuario();
        this._router.navigate(['/autenticacao/login']);
    }

    estaLogado(): boolean {
        return this.tokenStorageService.temToken();
    }

}

