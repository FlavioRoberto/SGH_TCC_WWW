import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { BaseService } from 'app/compartilhado/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService<ITurno> {

    listarTodos() {
        return this.getAll(this.rota.turno.listarTodos);
    }

    criarTurno(turno: ITurno) {
        console.log(turno)
        return this.post(turno, this.rota.turno.criar);
    }

}
