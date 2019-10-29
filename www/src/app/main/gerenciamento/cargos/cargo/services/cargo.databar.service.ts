import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';

import { Cargo } from '../models/cargo.model';
import { CargoService } from './cargo.service';
import { CargoPaginado } from '../models/cargo-paginado';

@Injectable()
export class CargoDataBarBindService implements IDataBarBindService<Cargo>{

    onClickEnter: EventEmitter<Cargo>;

    constructor(private _servico: CargoService, public formgroup: FormGroup) { }

    getEntidade(): Cargo {
        return this.formgroup.getRawValue() as Cargo;
    }

    criar(): Observable<Cargo> {
        return this._servico.criar(this.getEntidade());
    }

    editar(): Observable<Cargo> {
        return this._servico.editar(this.getEntidade());
    }

    remover(): Observable<Cargo> {
        return this._servico.remover(this.getEntidade().codigo);
    }

    listarPaginacao(entidadePaginada: CargoPaginado): Observable<CargoPaginado> {
        return this.listarPaginacao(entidadePaginada);
    }

}
