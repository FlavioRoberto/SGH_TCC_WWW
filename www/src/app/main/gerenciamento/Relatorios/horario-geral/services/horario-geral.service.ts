import { Injectable } from '@angular/core';
import { HorarioGeralRelatorioModel } from '../models/horario-geral-relatorio.model';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { Observable } from 'rxjs';
import { RoutesApi } from 'app/routes/api.routes';

@Injectable()
export class HorarioGeralRelatorioService extends HttpBaseService<HorarioGeralRelatorioModel>{

    private rota = new RoutesApi().getRoutes().relatorios.horarioGeral;

    gerarRelatorio(dados: HorarioGeralRelatorioModel): Observable<string> {
        console.log(this.rota);
        return this.post(dados, this.rota);
    }

}
