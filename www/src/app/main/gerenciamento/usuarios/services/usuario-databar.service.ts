import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { UsuarioPaginado } from '../models/usuario-paginado';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { AutenticacaoService } from '@compartilhado/core/auth/autenticacao.service';
import { tap } from 'rxjs/operators';

export class UsuarioDataBarService implements IDataBarBindService<IUsuario>{

    onClickEnter: EventEmitter<IUsuario>;

    constructor(public formgroup: FormGroup,
        private _servicoUsuario: UsuarioService,
        private _authService: AutenticacaoService) {
    }

    getEntidade(): IUsuario {
        return this.formgroup.getRawValue();
    }

    criar(): Observable<IUsuario> {
        return this._servicoUsuario.criar(this.getEntidade());
    }

    editar(): Observable<IUsuario> {
        return this._servicoUsuario.editar(this.getEntidade());
    }

    remover(): Observable<IUsuario> {
        const codigoUsuarioLogado = this._authService.getUsuario().codigo;
        const codigoUsuario = this.getEntidade().codigo;

        return this._servicoUsuario.remover(codigoUsuario)
            .pipe(tap(() => {
                if (codigoUsuario == codigoUsuarioLogado) {
                    this._authService.logout();
                }
            }));
    }

    listarPaginacao(entidadePaginada: UsuarioPaginado): Observable<UsuarioPaginado> {
        return this._servicoUsuario.listarPaginacao(entidadePaginada);
    }

}
