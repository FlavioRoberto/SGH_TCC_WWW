import { UsuarioPaginado } from '../models/usuario-paginado';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { tap } from 'rxjs/operators';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';
import { UsuarioModel } from '../models/usuario.model';
import { AutenticacaoService } from 'app/core/auth/autenticacao.service';

export class UsuarioDataBarService implements IDataBarBindService<UsuarioModel>{
    status: EStatus;

    onClickEnter: EventEmitter<UsuarioModel>;

    constructor(public formgroup: FormGroup,
        private _servicoUsuario: UsuarioService,
        private _authService: AutenticacaoService) {
        this.onClickEnter = new EventEmitter();
    }

    getEntidade(): UsuarioModel {
        return this.formgroup.getRawValue();
    }

    criar(): Observable<UsuarioModel> {
        return this._servicoUsuario.criar(this.getEntidade());
    }

    editar(): Observable<UsuarioModel> {
        return this._servicoUsuario.editar(this.getEntidade());
    }

    remover(): Observable<UsuarioModel> {
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
