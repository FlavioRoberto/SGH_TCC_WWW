import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';
import { ICurso } from './model/curso.model';
import { CursoPaginado } from './model/curso.paginacao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from './service/curso.service';
import { CursoDataBarService } from './service/curso-databar.service';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/idatabar-bind';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

@Component({
    selector: 'curso',
    templateUrl: './view/curso.component.html',
    styleUrls: ['./view/curso.component.scss']
})
export class CursoComponent implements IDataBarBindComponent<ICurso>{
    servicoDataBarBind: CursoDataBarService;
    statusNavBar: string;
    entidadePaginada: CursoPaginado;
    form: FormGroup;
    EStatus = EStatus;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoRequisicao: CursoService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.entidadePaginada = new CursoPaginado();
        this.form = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.servicoDataBarBind = new CursoDataBarService(this.form, this._servicoRequisicao);

    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }
}
