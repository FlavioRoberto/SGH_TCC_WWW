import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';

import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';

import { UsuarioPaginado } from './models/usuario-paginado';
import { UsuarioDataBarService } from './services/usuario-databar.service';
import { UsuarioService } from './services/usuario.service';
import { PerfilModel } from './models/iperfil';
import { ActivatedRoute } from '@angular/router';
import { celularRegex } from '@compartilhado/util/input-regex/input-regex';
import { AutenticacaoService } from '@compartilhado/core/auth/autenticacao.service';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';


@Component({
    templateUrl: './view/usuario.component.html'
})
export class UsuariosComponent implements IDataBarBindComponent<IUsuario>, OnInit {
    statusDataBar: EStatus;
    form: FormGroup;
    entidadePaginada: UsuarioPaginado;
    servicoDataBarBind: UsuarioDataBarService;
    status: EStatus;
    perfis: PerfilModel[];

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
        if (status === EStatus.inserindo) {
            this.form.get('ativo').setValue(true);
        }
    }

    preventEspacos(event: Event): void {
        event.preventDefault();
    }

    private _construirFormulario(): FormGroup {
        return this._formBuilder.group({
            codigo: new FormControl(null),
            nome: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
            telefone: new FormControl(null, [Validators.maxLength(20), Validators.required, Validators.pattern(celularRegex)]),
            login: new FormControl(null, [Validators.maxLength(30), Validators.required]),
            senha: new FormControl(null),
            email: new FormControl(null, [Validators.maxLength(45), Validators.required, Validators.email]),
            foto: new FormControl(null),
            perfilCodigo: new FormControl(null, [Validators.required]),
            ativo: new FormControl(false)
        });
    }
}
