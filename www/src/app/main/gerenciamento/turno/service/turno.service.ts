import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { HttpBaseService } from 'app/compartilhado/services/http-base.service';
import { TurnoPaginado } from '../model/turno.paginacao';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends HttpBaseService<ITurno> {

    private rotaTurno = this.rota.turno;

    listarPaginacao(turno: TurnoPaginado): Observable<TurnoPaginado> {
        console.log(turno);
        return this.postPaginacao(turno, this.rotaTurno.listarPaginacao);
    }

    criarTurno(turno: ITurno): Observable<ITurno> {
        if (turno.codigo == null) {
            turno.codigo = 0;
        }
        return this.post(turno, this.rotaTurno.criar);
    }

    editarTurno(turno: ITurno): Observable<ITurno> {
        return this.put(turno, this.rotaTurno.editar);
    }

    removerTurno(codigo: number): Observable<any> {
        return this.delete(this.rotaTurno.remover + codigo);
    }

}
