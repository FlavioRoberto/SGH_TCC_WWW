import { Injectable } from '@angular/core';
import { AulaModel } from '../model/aula.model';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { RoutesApi } from 'app/routes/api.routes';

@Injectable()
export class QuadroHorarioAulaService extends HttpBaseService<any> {

    private _rotaHorario = new RoutesApi().getRoutes().horario;
    private _rotaAula = new RoutesApi().getRoutes().aula;

    listarDiasSemana(): string[] {
        return ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    }

    listarAulas(codigoHorario: number): Observable<AulaModel[]> {
        return this.getAll(`${this._rotaHorario.base}/${codigoHorario}/listar-aulas`);
    }

    criarAula(aula: AulaModel): Observable<AulaModel> {
        return this.post(aula, this._rotaAula.criar);
    }

    removerAula(codigoAula: number): Observable<AulaModel> {
        return this.delete(`${this._rotaAula.remover}/${codigoAula}`);
    }

}
