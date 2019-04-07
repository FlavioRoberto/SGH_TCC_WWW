import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { HttpBaseService } from 'app/compartilhado/services/http-base.service';
import { TurnoPaginado } from '../model/turno.paginacao';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends HttpBaseService<ITurno> {

    listarPaginacao(turno: TurnoPaginado) {
        console.log(turno);
        return this.postPaginacao(turno, this.rota.turno.listarPaginacao);
    }

    criarTurno(turno: ITurno) {
        if (turno.codigo == null)
            turno.codigo = 0;
        return this.post(turno, this.rota.turno.criar);
    }

}
