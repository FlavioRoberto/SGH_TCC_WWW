import { IDisciplina } from '../model/IDisciplina';
import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService extends BaseService<IDisciplina>{

    public getRota(): any {
        return new routesApi().getRoutes().disciplina.disciplina;
    }

     listarPorDescricao(filtro: string): Observable<IDisciplina[]> {
        const rota = `${this.getRota().listarPorDescricao}?filtro=${filtro}`;
        return this.getAll(rota);
    }

}
