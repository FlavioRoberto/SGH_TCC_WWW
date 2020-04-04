import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';


@Injectable()
export class TurnoResolver implements Resolve<TurnoModel[]> {

    constructor(private turnoService: TurnoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.turnoService.listarTodos();
    }
}