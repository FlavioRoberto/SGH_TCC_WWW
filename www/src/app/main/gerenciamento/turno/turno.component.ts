import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../i18n/pt-br';
import { IDataBarBind } from 'app/layout/components/databar/contrato/IDataBarBind';
import { ITurno } from './model/turno.interface';
import { TurnoService } from './service/turno.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'turno',
    templateUrl: './view/turno.component.html',
    styleUrls: ['./view/turno.component.scss']
})
export class TurnoComponent implements IDataBarBind<ITurno>{
    acoesViewModel: IDataBarBind<ITurno>;
    turnoForm: FormGroup;
    turno: ITurno;
    public statusNavBar: string;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _turnoService: TurnoService,
        private _formBuilde: FormBuilder
    ) {

    }

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

    }

    setStatusNavBar(status): void {
        this.statusNavBar = status;
    }

    Criar(): void {
        console.log('opa meu consagrado...');
    }

    ListarPor(): void {
        this._turnoService
            .listarPeloCodigo(1)
            .subscribe((success: ITurno[]) => {
                this.turno = success[0];
            }, error => {
                console.log(error);
            });
    }

}
