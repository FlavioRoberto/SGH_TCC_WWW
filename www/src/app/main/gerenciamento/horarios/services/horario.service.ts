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

    listar(): Observable<HorarioModel[]> {
        return of(this._listarHorarios());
    }

    criar(horario: HorarioModel): Observable<HorarioModel> {
        return this.post(horario, this._rota.criar);
    }

    private _listarHorarios(): HorarioModel[] {
        const horarios = [];

        for (let i = 1; i < 30; i++) {
            horarios.push(
                {
                    codigo: i,
                    ano: 2020,
                    codigoCurriculo: 1,
                    curso: {
                        codigo: 1,
                        descricao: 'Engenharia da computação'
                    },
                    periodo: EPeriodos[0].codigo,
                    semestre: ESemestre.Primeiro,
                    turno: {
                        codigo: 1,
                        descricao: 'Matutino'
                    }
                }
            );
        }

        return horarios;
    }
}
