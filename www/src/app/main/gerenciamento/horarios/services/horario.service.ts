import { Injectable } from '@angular/core';
import { HorarioModel } from '../model/horario.model';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { Observable, of } from 'rxjs';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { routesApi } from 'app/routes/api.routes';

@Injectable({
    providedIn: 'root'
})
export class HorarioService extends HttpBaseService<HorarioModel> {

    private _rota = new routesApi().getRoutes().horario;

    listar(filtro: HorarioModel): Observable<HorarioModel[]> {
        return this.post(filtro, this._rota.listar);
    }

    criar(horario: HorarioModel): Observable<HorarioModel> {
        return this.post(horario, this._rota.criar);
    }
}
