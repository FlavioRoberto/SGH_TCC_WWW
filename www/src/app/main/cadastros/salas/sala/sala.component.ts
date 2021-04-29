import { Component, ChangeDetectorRef, Injector } from '@angular/core';
import { OnInitDataBar, EStatus } from '@breaking_dev/ic-databar-lib';
import { SalaModel } from './model/sala.model';
import { FormBuilder, Validators } from '@angular/forms';
import { SalaPaginada } from './model/sala-paginada.model';
import { SalaDatabarService } from './services/sala-databar.service';
import { ActivatedRoute } from '@angular/router';
import { BlocoModel } from '../bloco/model/bloco.model';

@Component({
    templateUrl: './view/sala.component.html'
})
export class SalaComponent extends OnInitDataBar<SalaModel>  {

    blocos: BlocoModel[] = [];

    constructor(private _formBuilder: FormBuilder,
        private _changeDetector: ChangeDetectorRef,
        private _injector: Injector,
        private _route: ActivatedRoute) {
        super();
    }

    onInit(): void {
        this._construirFormulario();
        this.entidadePaginada = new SalaPaginada();
        this.blocos = this._route.snapshot.data['blocos'];
        this.servicoDataBarBind = new SalaDatabarService(this.form, this._injector);
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
            codigoBloco: [null, [Validators.required]]
        });
    }

}

