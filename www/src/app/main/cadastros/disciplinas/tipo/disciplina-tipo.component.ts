import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as portugues } from '../../i18n/pt-br';
import { TipoPaginado } from './model/tipo.paginacao';
import { DisciplinaTipoService } from './service/disciplina.tipo.service';
import { DisciplinaTipoDataBarService } from './service/disciplina.tipo-databar.service';
import { TipoModel } from './model/iTipo';


@Component({
    selector: 'disciplinaTipo',
    templateUrl: './view/disciplina-tipo.html',
    styleUrls: ['./view/disciplina-tipo.scss']
})
export class DisciplinaTipoComponent implements IDataBarBindComponent<TipoModel> {
    statusDataBar: EStatus;
    servicoDataBarBind: DisciplinaTipoDataBarService;
    form: FormGroup;
    entidadePaginada: TipoPaginado;
    EStatus = EStatus;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilde: FormBuilder,
        private _servico: DisciplinaTipoService
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.form = this._formBuilde.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.servicoDataBarBind = new DisciplinaTipoDataBarService(this.form, this._servico);
        this.entidadePaginada = new TipoPaginado();

    }

    statusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

}

