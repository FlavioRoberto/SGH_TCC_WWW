import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../../i18n/pt-br';
import { ITipo } from './model/ITipo';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoPaginado } from './model/tipo.paginacao';
import { Observable } from 'rxjs';
import { DisciplinaTipoService } from './service/disciplina.tipo.service';

@Component({
    selector: 'disciplinaTipo',
    templateUrl: './view/disciplina-tipo.html',
    styleUrls: ['./view/disciplina-tipo.scss']
})
export class DisciplinaTipoComponent implements IDataBarBind<ITipo> {
    acoesViewModel: IDataBarBind<ITipo>;
    form: FormGroup;
    entidadePaginada: TipoPaginado;
    statusNavBar: string;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilde: FormBuilder,
        private _servico: DisciplinaTipoService
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.form = this._formBuilde.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.entidadePaginada = new TipoPaginado();

    }

    statusChanged(status: string): void {
        console.log('status', status)
        this.statusNavBar = status;
    }

    private _getDisciplinaTipo(): ITipo {
        return this.form.getRawValue() as ITipo;
    }

    criar(): Observable<ITipo> {
        const disciplinaTipo = this._getDisciplinaTipo();
        return this._servico.criar(disciplinaTipo);
    }

    listarPaginacao(tipo: TipoPaginado): Observable<TipoPaginado> {
        return this._servico.listarPaginacao(tipo);
    }

    editar(): Observable<ITipo> {
        const disciplinaTipo = this._getDisciplinaTipo();
        return this._servico.editar(disciplinaTipo);
    }
    remover(): Observable<any> {
        const codigo = this._getDisciplinaTipo().codigo;
        return this._servico.remover(codigo);
    }

}

