import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaPaginado } from './model/disciplina.paginacao';
import { ITipo } from '../tipo/model/ITipo';
import { DisciplinaTipoService } from '../tipo/service/disciplina.tipo.service';
import { DisciplinaService } from './service/disciplina.service';
import { IDisciplina } from './model/IDisciplina';

@Component({
    selector: 'disciplina',
    templateUrl: './view/disciplina.component.html',
    styleUrls: ['./view/disciplina.component.scss']
})
export class DisciplinaComponent implements IDataBarBind<IDisciplina> {
    acoesViewModel: IDataBarBind<IDisciplina>;
    form: FormGroup;
    entidadePaginada: DisciplinaPaginado;
    statusNavBar: string;

    tipos: ITipo[];

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _servicoTipo: DisciplinaTipoService,
        private _servicoDisciplina: DisciplinaService
    ) {
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.form = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ],
            codigoTipo: [null, Validators.required]
        });
        this.entidadePaginada = new DisciplinaPaginado();
        this._servicoTipo.listarTodos().subscribe(result => {
            console.log(result);
            this.tipos = result;
        });
    }

    statusChanged(status: string): void {
        throw new Error('Method not implemented.');
    }
    Criar(): import("rxjs").Observable<IDisciplina> {
        throw new Error('Method not implemented.');
    }
    ListarPaginacao(paginacao: import("../../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<IDisciplina>): import("rxjs").Observable<import("../../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<IDisciplina>> {
        throw new Error('Method not implemented.');
    }
    Editar(): import("rxjs").Observable<IDisciplina> {
        throw new Error('Method not implemented.');
    }
    Remover(): import("rxjs").Observable<any> {
        throw new Error('Method not implemented.');
    }
}
