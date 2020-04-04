import { Injectable } from '@angular/core';
import { UsuarioAutenticacaoModel } from './model/IUsuario.model';

const KEY = 'usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioStorageService {
    temUsuario(): boolean {
        return !!this.getUsuario();
    }

    setUsuario(usuario: UsuarioAutenticacaoModel): void {
        window.localStorage.setItem(KEY, JSON.stringify(usuario));
    }

    getUsuario(): UsuarioAutenticacaoModel {
        return  JSON.parse(window.localStorage.getItem(KEY)) as UsuarioAutenticacaoModel;
    }

    removerUsuario(): void {
        window.localStorage.removeItem(KEY);
    }
}
