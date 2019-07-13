import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { ITurno } from '../model/turno.interface';
import { FormGroup } from '@angular/forms';
import { TurnoService } from './turno.service';
import { Observable } from 'rxjs';
import { TurnoPaginado } from '../model/turno.paginacao';

export class TurnoDataBarService implements IDataBarBindService<ITurno>{

    onClickEnter: import("@angular/core").EventEmitter<ITurno>;

    constructor(public formgroup: FormGroup, private _turnoService: TurnoService) {
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