import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { TurnoService } from '../turno/service/turno.service';
import { ITurno } from '../turno/model/turno.interface';

@Injectable()
export class TurnoResolver implements Resolve<ITurno[]> {

    constructor(private turnoService: TurnoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.turnoService.listarTodos();
    }
}