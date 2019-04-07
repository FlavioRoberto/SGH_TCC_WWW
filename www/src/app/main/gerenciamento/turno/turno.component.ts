import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../i18n/pt-br';
import { ITurno } from './model/turno.interface';
import { TurnoService } from './service/turno.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { getMatInputUnsupportedTypeError } from '@angular/material';
import { TurnoPaginado } from './model/turno.paginacao';

@Component({
    selector: 'turno',
    templateUrl: './view/turno.component.html',
    styleUrls: ['./view/turno.component.scss']
})
export class TurnoComponent implements IDataBarBind {
    acoesViewModel: IDataBarBind;
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
            codigo: [''],
            descricao: ['', [
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

    private _setTurno(turno: ITurno) {
        this.turnoForm.setValue(turno);
    }

    private setStatusNavBar(status): void {
        this.statusNavBar = status;
    }

    Criar(): void {
        const turno = this._getTurno();
        this._turnoService.criarTurno(turno)
            .subscribe(success => {
                this._setTurno(success);
                this.setStatusNavBar('');
            }, error => console.log(error));
    }

    private _listarPaginado() {
        this._turnoService.listarPaginacao(this.turnoPaginacao)
            .subscribe(success => {
                this.turnoPaginacao = success;
                this._setTurno(success.entidade);
            }, error => console.log(error));
    }

    ListarPaginacao(): void {
        this.turnoPaginacao.entidade = this._getTurno();
        this._listarPaginado();
    }

    ListarProximo(): void {
        this.turnoPaginacao.posicao++;
        this.turnoPaginacao.entidade = null;
        this._listarPaginado();
    }

    ListarAnterior(): void {
        this.turnoPaginacao.posicao--;
        this.turnoPaginacao.entidade = null;
        this._listarPaginado();
    }

    Ultimo(): void {
        this.turnoPaginacao.posicao = this.turnoPaginacao.total;
        this.turnoPaginacao.entidade = null;
        this._listarPaginado();
    }

    Primeiro(): void {
        this.turnoPaginacao.posicao = 1;
        this.turnoPaginacao.entidade = null;
        this._listarPaginado();
    }

}