import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';

import { locale as portugues } from '../../i18n/pt-br';
import { ITipo } from './model/ITipo';
import { TipoPaginado } from './model/tipo.paginacao';
import { DisciplinaTipoService } from './service/disciplina.tipo.service';
import { DisciplinaTipoDataBarService } from './service/disciplina.tipo-databar.service';


@Component({
    selector: 'disciplinaTipo',
    templateUrl: './view/disciplina-tipo.html',
    styleUrls: ['./view/disciplina-tipo.scss']
})
export class DisciplinaTipoComponent implements IDataBarBindComponent<ITipo> {
    servicoDataBarBind: DisciplinaTipoDataBarService;
    form: FormGroup;
    entidadePaginada: TipoPaginado;
    statusNavBar: string;
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

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }

}

