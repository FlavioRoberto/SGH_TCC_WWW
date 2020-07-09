import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';


import { UsuarioPaginado } from './models/usuario-paginado';
import { UsuarioDataBarService } from './services/usuario-databar.service';
import { UsuarioService } from './services/usuario.service';
import { PerfilModel } from './models/perfil.model.ts';
import { ActivatedRoute } from '@angular/router';
import { celularRegex } from 'app/shared/regex/input-regex';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';
import { UsuarioModel } from './models/usuario.model';
import { AutenticacaoService } from 'app/core/auth/autenticacao.service';
import { CursoModel } from '../curso/model/curso.model';


@Component({
    templateUrl: './view/usuario.component.html'
})
export class UsuariosComponent implements IDataBarBindComponent<UsuarioModel>, OnInit {
    statusDataBar: EStatus;
    form: FormGroup;
    entidadePaginada: UsuarioPaginado;
    servicoDataBarBind: UsuarioDataBarService;
    status: EStatus;
    perfis: PerfilModel[];
    cursos: CursoModel[];

    constructor(private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoUsuario: UsuarioService,
        private _route: ActivatedRoute,
        private _authService: AutenticacaoService) {
    }

    get exibirSelectCurso(): boolean {
        const perfil = this.form?.get('perfilCodigo')?.value;
        return perfil === 3;
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.form = this._construirFormulario();
        this.entidadePaginada = new UsuarioPaginado();
        this.servicoDataBarBind = new UsuarioDataBarService(this.form, this._servicoUsuario, this._authService);
        this.perfis = this._route.snapshot.data['perfis'];
        this.cursos = this._route.snapshot.data['cursos'];
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
            codigo: [null],
            nome: [null, [Validators.required, Validators.maxLength(45)]],
            telefone: [null, [Validators.maxLength(20), Validators.required, Validators.pattern(celularRegex)]],
            login: [null, [Validators.maxLength(30), Validators.required]],
            senha: [null],
            email: [null, [Validators.maxLength(45), Validators.required, Validators.email]],
            foto: [null],
            perfilCodigo: [null, [Validators.required]],
            ativo: [false],
            cursoCodigo: [null]
        });
    }
}
