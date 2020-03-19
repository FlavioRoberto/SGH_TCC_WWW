import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OnInitDataBar, EStatus } from '@breaking_dev/ic-databar-lib';
import { BlocoDatabarService } from './service/bloco-databar.service';
import { BlocoModel } from './model/bloco.model';
import { BlocoPaginadoModel } from './model/bloco-paginado.model';

@Component({
    templateUrl: './view/bloco.component.html',
    styleUrls: ['./view/bloco.component.scss']
})
export class BlocoComponent extends OnInitDataBar<BlocoModel> {

    servicoDataBarBind: BlocoDatabarService;

    constructor(private _formBuilder: FormBuilder) {
        super();
    }

    onInit(): void {
        this._construirFormulario();
        this.entidadePaginada = new BlocoPaginadoModel();
        this.servicoDataBarBind = new BlocoDatabarService(this.form);
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({});
    }

}


