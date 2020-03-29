import { FormGroup } from '@angular/forms';
import { EventEmitter, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataBarBindService, EStatus, IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { SalaModel } from '../model/sala.model';
import { SalaService } from './sala.service';

export class SalaDatabarService implements IDataBarBindService<SalaModel> {
    onClickEnter: EventEmitter<SalaModel>;
    status: EStatus;
    private _salaService: SalaService;

    constructor(public formgroup: FormGroup, private _injector: Injector) {
        this.onClickEnter = new EventEmitter();
        this._salaService = this._injector.get(SalaService);
    }

    getEntidade(): SalaModel {
        return this.formgroup.getRawValue() as SalaModel;
    }

    criar(): Observable<SalaModel> {
        return this._salaService.criar(this.getEntidade());
    }

    editar(): Observable<SalaModel> {
        return this._salaService.editar(this.getEntidade());
    }

    remover(): Observable<SalaModel> {
        const codigoSala = this.getEntidade().codigo;
        return this._salaService.remover(codigoSala);
    }

    listarPaginacao(entidadePaginada: IDataEntidadePaginada<SalaModel>): Observable<IDataEntidadePaginada<SalaModel>> {
        return this._salaService.listarPaginacao(entidadePaginada);
    }
}
