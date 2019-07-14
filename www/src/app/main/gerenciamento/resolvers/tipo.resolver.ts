import { ITipo } from '../disciplina/tipo/model/ITipo';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { DisciplinaTipoService } from '../disciplina/tipo/service/disciplina.tipo.service';

@Injectable()
export class TipoResolver implements Resolve<ITipo[]> {

    constructor(private disciplinaTipoService: DisciplinaTipoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.disciplinaTipoService.listarTodos();
    }
}