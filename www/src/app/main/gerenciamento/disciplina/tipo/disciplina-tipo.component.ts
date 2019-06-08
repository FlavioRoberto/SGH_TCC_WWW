import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { ITipo } from './model/ITipo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoPaginado } from './model/tipo.paginacao';
import { DisciplinaTipoService } from './service/disciplina.tipo.service';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';
import { DisciplinaTipoDataBarService } from './service/disciplina.tipo-databar.service';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

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
        console.log('status', status)
        this.statusNavBar = status;
    }

}

