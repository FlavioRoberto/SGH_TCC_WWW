import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TipoModel } from 'app/main/cadastros/disciplinas/tipo/model/ITipo';
import { DisciplinaTipoService } from 'app/main/cadastros/disciplinas/tipo/service/disciplina.tipo.service';

@Injectable()
export class TipoResolver implements Resolve<TipoModel[]> {

    constructor(private disciplinaTipoService: DisciplinaTipoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.disciplinaTipoService.listarTodos();
    }
}