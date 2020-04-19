import { Injectable } from '@angular/core';
import { HorarioModel } from '../model/horario.model';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { Observable, of } from 'rxjs';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { routesApi } from 'app/routes/api.routes';
import { HorarioFiltroModel } from '../model/horario-filtro.model';

@Injectable({
    providedIn: 'root'
})
export class HorarioService extends HttpBaseService<HorarioModel> {

    private _rota = new routesApi().getRoutes().horario;

    listar(filtro: HorarioFiltroModel): Observable<HorarioModel[]> {
        return this.post(filtro, this._rota.listar);
    }

    criar(horario: HorarioModel): Observable<HorarioModel> {
        return this.post(horario, this._rota.criar);
    }

    editar(horario: HorarioModel): Observable<HorarioModel> {
        return this.put(horario, this._rota.editar);
    }

    remover(codigoHorario: number): Observable<HorarioModel> {
        return this.delete(`${this._rota.remover}?codigo=${codigoHorario}`);
    }
}
