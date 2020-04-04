import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';

import { TurnoService } from './turno.service';
import { TurnoPaginado } from '../model/turno.paginacao';
import { TurnoModel } from '../model/turno.interface';

export class TurnoDataBarService implements IDatabarBindOnClickService<TurnoModel>{
    eventDatabar: DatabarEventClickService;
    status: EStatus;

    onClickEnter: EventEmitter<TurnoModel>;

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

    getEntidade(): TurnoModel {
        return this.formgroup.getRawValue() as TurnoModel;
    }

    criar(): Observable<TurnoModel> {
        const turno = this.getEntidade();
        return this._turnoService.criar(turno);
    }

    listarPaginacao(paginacao: TurnoPaginado): Observable<TurnoPaginado> {
        return this._turnoService.listarPaginacao(paginacao);
    }

    editar(): Observable<TurnoModel> {
        return this._turnoService.editar(this.getEntidade());
    }

    remover(): Observable<any> {
        return this._turnoService
            .remover(this.getEntidade().codigo);
    }

}