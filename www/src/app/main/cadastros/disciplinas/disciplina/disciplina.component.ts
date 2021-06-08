import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { DisciplinaPaginado } from './model/disciplina.paginacao';
import { DisciplinaDataBarService } from './service/disciplina-databar.service';
import { DisciplinaModel } from './model/disciplina';
import { DisciplinaFormularioService } from './service/disciplina-formulario.service';
import { TipoModel } from 'app/main/cadastros/disciplinas/tipo/model/ITipo';

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

    }

    statusChanged(status: EStatus): void {
        this.statusDataBar = status;

        if (status === EStatus.inserindo)
            this._formularioService.tipoDisciplina = this.tipos[0];
    }
}
