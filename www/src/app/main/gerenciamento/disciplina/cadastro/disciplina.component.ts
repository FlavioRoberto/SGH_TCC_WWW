import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaPaginado } from './model/disciplina.paginacao';
import { ITipo } from '../tipo/model/ITipo';
import { DisciplinaTipoService } from '../tipo/service/disciplina.tipo.service';
import { DisciplinaService } from './service/disciplina.service';
import { IDisciplina } from './model/IDisciplina';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';
import { DisciplinaDataBarService } from './service/disciplina-databar.service';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'disciplina',
    templateUrl: './view/disciplina.component.html',
    styleUrls: ['./view/disciplina.component.scss']
})
export class DisciplinaComponent implements IDataBarBindComponent<IDisciplina> {
    servicoDataBarBind: DisciplinaDataBarService;
    form: FormGroup;
    entidadePaginada: DisciplinaPaginado;
    statusNavBar: string;
    EStatus = EStatus;
    tipos: ITipo[];

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _servicoTipo: DisciplinaTipoService,
        private _servicoDisciplina: DisciplinaService,
        private _route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.form = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ],
            codigoTipo: [null, Validators.required]
        });

        this.servicoDataBarBind = new DisciplinaDataBarService(this.form, this._servicoDisciplina);

        this.entidadePaginada = new DisciplinaPaginado();

        this.tipos = this._route.snapshot.data['tipos'];
    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }

}
