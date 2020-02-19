import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { Observable } from 'rxjs';
import { Disciplina } from '../model/disciplina';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService extends BaseService<Disciplina>{

    public getRota(): any {
        return new routesApi().getRoutes().disciplina.disciplina;
    }

     listarPorDescricao(filtro: string): Observable<Disciplina[]> {
        const rota = `${this.getRota().listarPorDescricao}?filtro=${filtro}`;
        return this.getAll(rota);
    }

}
