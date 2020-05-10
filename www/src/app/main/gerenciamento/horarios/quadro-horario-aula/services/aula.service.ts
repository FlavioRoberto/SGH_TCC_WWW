import { HttpBaseService } from 'app/core/services/http-base.service';
import { Injectable } from '@angular/core';
import { RoutesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';
import { AulaModel } from '../model/aula.model';

@Injectable()
export class AulaService extends HttpBaseService<AulaModel> {

    private _rotaAula = new RoutesApi().getRoutes().aula;

    criar(aula: AulaModel): Observable<AulaModel> {
        return this.post(aula, this._rotaAula.criar);
    }

    remover(codigoAula: number): Observable<AulaModel> {
        return this.delete(`${this._rotaAula.remover}/${codigoAula}`);
    }

}
