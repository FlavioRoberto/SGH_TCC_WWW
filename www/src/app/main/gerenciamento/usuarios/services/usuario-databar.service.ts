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
        return this._servicoUsuario.criar(this.getEntidade());
    }

    editar(): Observable<IUsuario> {
        return this._servicoUsuario.editar(this.getEntidade());
    }

    remover(): Observable<IUsuario> {
        return this._servicoUsuario.remover(this.getEntidade().codigo);
    }

    listarPaginacao(entidadePaginada: UsuarioPaginado): Observable<UsuarioPaginado> {
        return this._servicoUsuario.listarPaginacao(entidadePaginada);
    }

}
