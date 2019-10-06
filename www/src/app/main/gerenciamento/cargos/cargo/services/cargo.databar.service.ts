import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';

import { Cargo } from '../models/cargo.model';

@Injectable()
export class CargoDataBarBindService implements IDataBarBindService<Cargo>{

    formgroup: FormGroup;
    onClickEnter: EventEmitter<Cargo>;

    getEntidade(): Cargo {
        throw new Error("Method not implemented.");
    }

    criar(): Observable<Cargo> {
        throw new Error("Method not implemented.");
    }
    editar(): Observable<Cargo> {
        throw new Error("Method not implemented.");
    }
    remover(): Observable<Cargo> {
        throw new Error("Method not implemented.");
    }

    listarPaginacao(entidadePaginada: IDataEntidadePaginada<Cargo>): Observable<IDataEntidadePaginada<Cargo>> {
        throw new Error("Method not implemented.");
    }

}
