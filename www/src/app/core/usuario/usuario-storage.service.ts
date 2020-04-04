import { Injectable } from '@angular/core';
import { UsuarioModel } from './model/IUsuario.model';

const KEY = 'usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioStorageService {
    temUsuario(): boolean {
        return !!this.getUsuario();
    }

    setUsuario(usuario: UsuarioModel): void {
        window.localStorage.setItem(KEY, JSON.stringify(usuario));
    }

    getUsuario(): UsuarioModel {
        return  JSON.parse(window.localStorage.getItem(KEY)) as UsuarioModel;
    }

    removerUsuario(): void {
        window.localStorage.removeItem(KEY);
    }
}
