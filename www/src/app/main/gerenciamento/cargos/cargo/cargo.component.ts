import { Component } from '@angular/core';
import { DataBarBaseComponent } from '@compartilhado/layout/databar/contrato/databar-base-component';

import { Cargo } from './models/cargo.model';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/idatabar-bind';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { CargoPaginado } from './models/cargo-paginado';
import { CargoDataBarBindService } from './services/cargo.databar.service';

@Component({
    templateUrl: './view/cargo.component.html'
})
export class CargoComponent implements IDataBarBindComponent<Cargo> {

    form: FormGroup;
    entidadePaginada: CargoPaginado;
    statusNavBar: string;
    servicoDataBarBind: CargoDataBarBindService;

    constructor(private _formBuilder: FormBuilder, _srv) {
        this.construirFormulario();
        this.entidadePaginada = new CargoPaginado();
        this.servicoDataBarBind = new CargoDataBarBindService();
    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }

    construirFormulario(): void {
        this.form = this._formBuilder.group({});
    }

}

