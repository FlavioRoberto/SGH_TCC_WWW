import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';

import { TurnoService } from './turno.service';
import { TurnoPaginado } from '../model/turno.paginacao';
import { ITurno } from '../model/turno.interface';

export class TurnoDataBarService implements IDatabarBindOnClickService<ITurno>{
    eventDatabar: DatabarEventClickService;
    status: EStatus;

    onClickEnter: EventEmitter<ITurno>;

    constructor(public formgroup: FormGroup, private _turnoService: TurnoService) {
        this.onClickEnter = new EventEmitter();
        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.afterClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): ITurno {
        return this.formgroup.getRawValue() as ITurno;
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