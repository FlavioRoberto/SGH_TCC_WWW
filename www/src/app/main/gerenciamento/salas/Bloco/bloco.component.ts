import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnInitDataBar, EStatus } from '@breaking_dev/ic-databar-lib';
import { BlocoDatabarService } from './service/bloco-databar.service';
import { BlocoModel } from './model/bloco.model';
import { BlocoPaginadoModel } from './model/bloco-paginado.model';
import { BlocoService } from './service/bloco.service';

@Component({
    templateUrl: './view/bloco.component.html',
    styleUrls: ['./view/bloco.component.scss']
})
export class BlocoComponent extends OnInitDataBar<BlocoModel> {

    servicoDataBarBind: BlocoDatabarService;

    constructor(
        private _formBuilder: FormBuilder,
        private _blocoService: BlocoService,
        private _changeDetector: ChangeDetectorRef) {
        super();
    }

    onInit(): void {
        this._construirFormulario();
        this.servicoDataBarBind = new BlocoDatabarService(this.form, this._blocoService);
        this.entidadePaginada = new BlocoPaginadoModel();
        this._changeDetector.detectChanges();
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [Validators.required, Validators.maxLength(30)]]
        });
    }

}
