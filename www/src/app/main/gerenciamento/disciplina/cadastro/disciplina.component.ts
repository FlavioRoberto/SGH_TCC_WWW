import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaPaginado } from './model/disciplina.paginacao';
import { ITipo } from '../tipo/model/ITipo';
import { DisciplinaTipoService } from '../tipo/service/disciplina.tipo.service';
import { DisciplinaService } from './service/disciplina.service';
import { IDisciplina } from './model/IDisciplina';
import { DisciplinaDataBarService } from './service/disciplina-databar.service';
import { ActivatedRoute } from '@angular/router';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';

@Component({
    selector: 'disciplina',
    templateUrl: './view/disciplina.component.html',
    styleUrls: ['./view/disciplina.component.scss']
})
export class DisciplinaComponent implements IDataBarBindComponent<IDisciplina> {
    statusDataBar: EStatus;
    servicoDataBarBind: DisciplinaDataBarService;
    form: FormGroup;
    entidadePaginada: DisciplinaPaginado;
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

    statusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

}
