import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';
import { Observable } from 'rxjs';
import { DisciplinaModel } from '../model/disciplina';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService extends BaseService<DisciplinaModel>{

    public getRota(): any {
        return new routesApi().getRoutes().disciplina.disciplina;
    }

     listarPorDescricao(filtro: string): Observable<DisciplinaModel[]> {
        const rota = `${this.getRota().listarPorDescricao}?filtro=${filtro}`;
        return this.getAll(rota);
    }

}
