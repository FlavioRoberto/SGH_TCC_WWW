import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../../../i18n/pt-br';
import { ITipo } from './model/ITipo';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoPaginado } from './model/tipo.paginacao';
import { Observable } from 'rxjs';

@Component({
    selector: 'disciplinaTipo',
    templateUrl: './view/disciplina-tipo.html',
    styleUrls: ['./view/disciplina-tipo.scss']
})
export class DisciplinaTipoComponent implements IDataBarBind<ITipo> {


    acoesViewModel: IDataBarBind<ITipo>;
    tipoForm: FormGroup;
    tipoPaginado: TipoPaginado;
    statusNavBar: string;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilde: FormBuilder
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.tipoForm = this._formBuilde.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.tipoPaginado = new TipoPaginado();

    }

    statusChanged(status: string): void {
        console.log('status', status)
        this.statusNavBar = status;
    }

    private _getTurno(): ITipo {
        return this.tipoForm.getRawValue() as ITipo
    }

    Criar(): Observable<ITipo> {
        throw new Error('Method not implemented.');
    }

    ListarPaginacao(paginacao: import("../../../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<ITipo>): Observable<import("../../../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<ITipo>> {
        throw new Error('Method not implemented.');
    }

    Editar(): Observable<ITipo> {
        throw new Error('Method not implemented.');
    }
    Remover(): Observable<any> {
        throw new Error('Method not implemented.');
    }


}

