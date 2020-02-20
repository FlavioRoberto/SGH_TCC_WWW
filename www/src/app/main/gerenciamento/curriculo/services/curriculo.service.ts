import { Injectable, Inject } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';

@Injectable({
    providedIn: 'root'
})
export class CurriculoService extends BaseService<Curriculo>{

    public getRota(): any {
        return new routesApi().getRoutes().curriculo;
    }

    listarDisciplinas(codigoCurriculo: number): Observable<ICurriculoDisciplina[]>{
        return this.getAll(`${this.getRota().base}/${codigoCurriculo}/disciplinas`);
    }

}
