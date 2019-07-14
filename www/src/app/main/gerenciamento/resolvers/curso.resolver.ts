import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ICurso } from '../curso/model/curso.model';
import { CursoService } from '../curso/service/curso.service';

@Injectable()
export class CursoResolver implements Resolve<ICurso[]> {

    constructor(private cursoService: CursoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.cursoService.listarTodos();
    }
}