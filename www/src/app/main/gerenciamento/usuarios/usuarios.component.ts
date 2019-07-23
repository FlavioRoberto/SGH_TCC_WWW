import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';

import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';
import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

import { UsuarioPaginado } from './models/usuario-paginado';
import { UsuarioDataBarService } from './services/usuario-databar.service';
import { UsuarioService } from './services/usuario.service';
import { IPerfil } from './models/iperfil';
import { ActivatedRoute } from '@angular/router';
import { celularRegex } from '@compartilhado/util/input-regex/input-regex';
import { AutenticacaoService } from '@compartilhado/core/auth/autenticacao.service';


@Component({
    templateUrl: './view/usuario.component.html'
})
export class UsuariosComponent implements IDataBarBindComponent<IUsuario> {
    form: FormGroup;
    entidadePaginada: UsuarioPaginado;
    statusNavBar: string;
    servicoDataBarBind: UsuarioDataBarService;
    status: EStatus;
    perfis: IPerfil[];

    constructor(private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoUsuario: UsuarioService,
        private _route: ActivatedRoute,
        private _authService: AutenticacaoService) {
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.form = this._construirFormulario();
        this.entidadePaginada = new UsuarioPaginado();
        this.servicoDataBarBind = new UsuarioDataBarService(this.form, this._servicoUsuario, this._authService);
        this.perfis = this._route.snapshot.data['perfis'];
    }

    statusChanged(status: EStatus): void {
        this.status = status;
    }

    preventEspacos(event: Event): void {
        event.preventDefault();
    }

    private _construirFormulario(): FormGroup {
        return this._formBuilder.group({
            codigo: [null],
            nome: [null, [Validators.required, Validators.maxLength(45)]],
            telefone: [null, [Validators.maxLength(20), Validators.required, Validators.pattern(celularRegex)]],
            login: [null, [Validators.maxLength(30), Validators.required]],
            senha: [null, [Validators.required]],
            email: [null, [Validators.maxLength(45), Validators.required, Validators.email]],
            foto: [null, []],
            perfilCodigo: [null, [Validators.required]]
        });
    }
}
