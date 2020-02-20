import { Injectable } from '@angular/core';
import { BaseService } from '@compartilhado/services/base.service';
import { Cargo } from '../models/cargo.model';
import { routesApi } from 'app/routes/api.routes';
import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { CargoDisciplina } from '../models/cargo-disciplina';
import { Observable } from 'rxjs';

@Injectable()
export class CargoService extends BaseService<Cargo>{

    getRota(): any {
        return new routesApi().getRoutes().cargo;
    }

    listarSemestres(): ESemestre[] {
        return [ESemestre.Primeiro, ESemestre.Segundo];
    }

    adicionarDisciplina(disciplina: CargoDisciplina): Observable<CargoDisciplina> {
        return this.post<CargoDisciplina>(disciplina, `${this.getRota().base}/disciplinas`);
    }

    listarDisciplinas(codigoCargo: number):Observable<CargoDisciplina[]>{
        return this.getAll(`${this.getRota().base}/disciplinas/${codigoCargo}`);
    }
}

