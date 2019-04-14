import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../i18n/pt-br';
import { ITurno } from './model/turno.interface';
import { TurnoService } from './service/turno.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { getMatInputUnsupportedTypeError } from '@angular/material';
import { TurnoPaginado } from './model/turno.paginacao';
import { Observable } from 'rxjs';

@Component({
    selector: 'turno',
    templateUrl: './view/turno.component.html',
    styleUrls: ['./view/turno.component.scss']
})
export class TurnoComponent implements IDataBarBind<ITurno> {
    acoesViewModel: IDataBarBind<ITurno>;
    turnoForm: FormGroup;
    turnoPaginacao: TurnoPaginado;
    public statusNavBar: string;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _turnoService: TurnoService,
        private _formBuilde: FormBuilder
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.turnoForm = this._formBuilde.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.turnoPaginacao = new TurnoPaginado();

    }

    private _getTurno(): ITurno {
        return this.turnoForm.getRawValue() as ITurno
    }

    Criar(): Observable<ITurno> {
        const turno = this._getTurno();
        return this._turnoService.criarTurno(turno);
    }

    ListarPaginacao(): Observable<TurnoPaginado> {
        return this._turnoService.listarPaginacao(this.turnoPaginacao);
    }

    Editar(): Observable<ITurno> {
        return this._turnoService.editarTurno(this._getTurno());
    }

    Remover(): Observable<any> {
        return this._turnoService
            .removerTurno(this._getTurno().codigo);
    }

}
