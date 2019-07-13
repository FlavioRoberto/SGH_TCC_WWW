import { Injectable } from '@angular/core';
import { IUsuario } from './model/IUsuario.model';

const KEY = 'usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioStorageService {
    temUsuario(): boolean {
        return !!this.getUsuario();
    }

    setUsuario(usuario: IUsuario): void {
        window.localStorage.setItem(KEY, JSON.stringify(usuario));
    }

    getUsuario(): IUsuario {
        return  JSON.parse(window.localStorage.getItem(KEY)) as IUsuario;
    }

    removerUsuario(): void {
        window.localStorage.removeItem(KEY);
    }
}
