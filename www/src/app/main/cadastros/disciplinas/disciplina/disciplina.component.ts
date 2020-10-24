import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaPaginado } from './model/disciplina.paginacao';
import { TipoModel } from '../tipo/model/ITipo';
import { DisciplinaTipoService } from '../tipo/service/disciplina.tipo.service';
import { DisciplinaService } from './service/disciplina.service';
import { DisciplinaDataBarService } from './service/disciplina-databar.service';
import { ActivatedRoute } from '@angular/router';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';
import { DisciplinaModel } from './model/disciplina';
import { DisciplinaFormularioService } from './service/disciplina-formulario.service';

@Component({
    selector: 'disciplina',
    templateUrl: './view/disciplina.component.html',
    styleUrls: ['./view/disciplina.component.scss']
})
export class DisciplinaComponent implements IDataBarBindComponent<DisciplinaModel> {
    statusDataBar: EStatus;
    form: FormGroup;
    entidadePaginada: DisciplinaPaginado;
    EStatus = EStatus;
    tipos: TipoModel[];

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formularioService: DisciplinaFormularioService,
        private _route: ActivatedRoute,
        public servicoDataBarBind: DisciplinaDataBarService
    ) {
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);

        this.form = this._formularioService.form;

        this.entidadePaginada = new DisciplinaPaginado();

        this.tipos = this._route.snapshot.data['tipos'];
    }

    statusChanged(status: EStatus): void {
        this.statusDataBar = status;

        if (status === EStatus.inserindo)
            this._formularioService.tipoDisciplina = this.tipos[0];
    }
}
