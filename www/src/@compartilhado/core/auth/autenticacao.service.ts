import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { TokenStorageService } from '../token/token-storage.service';
import { UsuarioStorageService } from '../usuario/usuario-storage.service';
import { IUsuario } from '../usuario/model/IUsuario.model';


@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private tokenStorageService: TokenStorageService,
                private usuarioStorage: UsuarioStorageService) { }

    setToken(token: string): void {
        this.tokenStorageService.setToken(token);
        const usuarioDoToken = this.jwtHelper.decodeToken(token) as IUsuario;
        this.usuarioStorage.setUsuario(usuarioDoToken);
    }

    getToken(): string {
        return this.tokenStorageService.getToken();
    }

    setUsuario(usuario: IUsuario): void{
        this.usuarioStorage.setUsuario(usuario);
    }

    getUsuario(): IUsuario {
        return this.usuarioStorage.getUsuario();
    }

    logout(): void {
        this.tokenStorageService.removerToken();
        this.usuarioStorage.removerUsuario();
    }

    estaLogado(): boolean {
        return this.tokenStorageService.temToken();
    }

}

