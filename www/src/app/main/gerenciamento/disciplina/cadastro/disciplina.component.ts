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
import { Observable } from 'rxjs';

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

    private _getEntidade(): IDisciplina {
        return this.form.getRawValue();
    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }
    criar(): Observable<IDisciplina> {
        console.log(this._getEntidade());
        return this._servicoDisciplina.criar(this._getEntidade())
    }
    listarPaginacao(paginacao: DisciplinaPaginado): Observable<DisciplinaPaginado> {
        return this._servicoDisciplina.listarPaginacao(paginacao);
    }
    editar(): Observable<IDisciplina> {
        return this._servicoDisciplina.editar(this._getEntidade());
    }
    remover(): Observable<any> {
        return this._servicoDisciplina.remover(this._getEntidade().codigo);
    }
}
