import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../i18n/pt-br';
import { ITurno } from './model/turno.interface';
import { TurnoService } from './service/turno.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurnoPaginado } from './model/turno.paginacao';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';
import { TurnoDataBarService } from './service/turno-databar.service';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

@Component({
    selector: 'turno',
    templateUrl: './view/turno.component.html',
    styleUrls: ['./view/turno.component.scss']
})
export class TurnoComponent implements IDataBarBindComponent<ITurno> {
    servicoDataBarBind: TurnoDataBarService;
    form: FormGroup;
    entidadePaginada: TurnoPaginado;
    statusNavBar: string;
    public EStatus = EStatus;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _turnoService: TurnoService,
        private _formBuilde: FormBuilder
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.form = this._formBuilde.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(1)]
            ]
        });

        this.servicoDataBarBind = new TurnoDataBarService(this.form, this._turnoService);

        this.entidadePaginada = new TurnoPaginado();

    }

    statusChanged(status: string): void {
        console.log('status', status)
        this.statusNavBar = status;
    }


}
