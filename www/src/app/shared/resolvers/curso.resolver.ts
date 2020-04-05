import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CursoModel } from 'app/main/cadastros/curso/model/curso.model';
import { CursoService } from 'app/main/cadastros/curso/service/curso.service';


@Injectable()
export class CursoResolver implements Resolve<CursoModel[]> {

    constructor(private cursoService: CursoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.cursoService.listarTodos();
    }
}