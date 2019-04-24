import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { ICurso } from './model/curso.model';
import { Observable } from 'rxjs';
import { CursoPaginado } from './model/curso.paginacao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from './service/curso.service';

@Component({
    selector: 'curso',
    templateUrl: './view/curso.component.html',
    styleUrls: ['./view/curso.component.scss']
})
export class CursoComponent implements IDataBarBind<ICurso>{

    statusNavBar: string;
    acoesViewModel: IDataBarBind<ICurso>;
    cursoPaginacao: CursoPaginado;
    cursoForm: FormGroup;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servico: CursoService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.cursoPaginacao = new CursoPaginado();
        this.cursoForm = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });
    }

    private _getCurso(): ICurso {
        return this.cursoForm.getRawValue() as ICurso;
    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }

    Criar(): Observable<ICurso> {
        return this._servico.criar(this._getCurso());
    }

    ListarPaginacao(paginacao: CursoPaginado): Observable<CursoPaginado> {
        return this._servico.listarPaginacao(paginacao);
    }

    Editar(): Observable<ICurso> {
        return this._servico.editar(this._getCurso());
    }

    Remover(): Observable<any> {
        return this._servico.remover(this._getCurso().codigo);
    }
}
