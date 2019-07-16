import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { UsuarioPaginado } from '../models/usuario-paginado';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { UsuarioService } from './usuario.service';

export class UsuarioDataBarService implements IDataBarBindService<IUsuario>{

    onClickEnter: EventEmitter<IUsuario>;

    constructor(public formgroup: FormGroup, private _servicoUsuario: UsuarioService) {
    }

    getEntidade(): IUsuario {
        return this.formgroup.value as IUsuario;
    }

    criar(): Observable<IUsuario> {
        throw new Error('Method not implemented.');
    }

    editar(): Observable<IUsuario> {
        throw new Error('Method not implemented.');
    }

    remover(): Observable<IUsuario> {
        throw new Error('Method not implemented.');
    }

    listarPaginacao(entidadePaginada: UsuarioPaginado): Observable<UsuarioPaginado> {
        throw new Error('Method not implemented.');
    }

}
