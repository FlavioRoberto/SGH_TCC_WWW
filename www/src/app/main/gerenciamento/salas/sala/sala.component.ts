import { Component, ChangeDetectorRef } from '@angular/core';
import { OnInitDataBar, EStatus } from '@breaking_dev/ic-databar-lib';
import { SalaModel } from './model/sala.model';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms';
import { BlocoModel } from '../bloco/model/bloco.model';
import { SalaPaginada } from './model/sala-paginada.model';
import { SalaDatabarService } from './services/sala-databar.service';

@Component({
    templateUrl: './view/sala.component.html'
})
export class SalaComponent extends OnInitDataBar<SalaModel>  {

    blocos: BlocoModel[] = [];

    constructor(private _formBuilder: FormBuilder, private _changeDetector: ChangeDetectorRef) {
        super();
    }

    onInit(): void {
        this.entidadePaginada = new SalaPaginada();
        this.servicoDataBarBind = new SalaDatabarService();
        this._construirFormulario();
        this._changeDetector.detectChanges();
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            numero: [null, [Validators.required]],
            descricao: [null, [Validators.required]],
            laboratorio: [null],
            codigoBloco: [null, Validators.required]
        });
    }

}

