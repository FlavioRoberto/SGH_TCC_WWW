import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { TurnoService } from '../../main/gerenciamento/turno/service/turno.service';
import { ITurno } from '../../main/gerenciamento/turno/model/turno.interface';

@Injectable()
export class TurnoResolver implements Resolve<ITurno[]> {

    constructor(private turnoService: TurnoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.turnoService.listarTodos();
    }
}