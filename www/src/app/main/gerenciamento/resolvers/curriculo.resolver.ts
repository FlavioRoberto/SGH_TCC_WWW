import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ICurso } from '../curso/model/curso.model';
import { CursoService } from '../curso/service/curso.service';
import { CurriculoService } from '../curriculo/services/curriculo.service';
import { Curriculo } from '../curriculo/model/curriculo.model';
import { Observable } from 'rxjs';

@Injectable()
export class CurriculoResolver implements Resolve<Curriculo[]> {

    constructor(private curriculoServico: CurriculoService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Curriculo[]> {
        return this.curriculoServico.listarTodos();
    }
}
