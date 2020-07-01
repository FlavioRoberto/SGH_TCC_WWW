import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { Observable } from 'rxjs';
import { RoutesApi } from 'app/routes/api.routes';
import { HorarioIndividualRelatorioModel } from '../models/horario-individual.model';

@Injectable()
export class HorarioIndividualRelatorioService extends HttpBaseService<HorarioIndividualRelatorioModel>{

    private rota = new RoutesApi().getRoutes().relatorios.horarioIndividual;

    gerarRelatorio(dados: HorarioIndividualRelatorioModel): Observable<string> {
        return this.post(dados, this.rota);
    }

}
