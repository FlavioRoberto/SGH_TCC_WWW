import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { TurnoService } from './turno.service';
import { TurnoPaginado } from '../model/turno.paginacao';
import { ITurno } from '../model/turno.interface';

export class TurnoDataBarService implements IDataBarBindService<ITurno>{

    onClickEnter: EventEmitter<ITurno>;

    constructor(public formgroup: FormGroup, private _turnoService: TurnoService) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): ITurno {
        return this.formgroup.getRawValue() as ITurno
    }

    criar(): Observable<ITurno> {
        const turno = this.getEntidade();
        return this._turnoService.criar(turno);
    }

    listarPaginacao(paginacao: TurnoPaginado): Observable<TurnoPaginado> {
        return this._turnoService.listarPaginacao(paginacao);
    }

    editar(): Observable<ITurno> {
        return this._turnoService.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._turnoService
            .remover(this.getEntidade().codigo);
    }

}