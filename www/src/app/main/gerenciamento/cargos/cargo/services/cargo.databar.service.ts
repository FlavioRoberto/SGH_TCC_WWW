import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Cargo } from '../models/cargo.model';
import { CargoService } from './cargo.service';
import { CargoPaginado } from '../models/cargo-paginado';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';

@Injectable()
export class CargoDataBarBindService implements IDataBarBindService<Cargo>{
    
    status: EStatus;
    onClickEnter: EventEmitter<Cargo>;

    constructor(private _servico: CargoService, public formgroup: FormGroup) {
        this.onClickEnter = new EventEmitter();
    }

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
        return this._servico.listarPaginacao(entidadePaginada);
    }

}
