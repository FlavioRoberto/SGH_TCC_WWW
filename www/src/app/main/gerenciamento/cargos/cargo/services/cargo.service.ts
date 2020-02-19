import { Injectable } from '@angular/core';
import { BaseService } from '@compartilhado/services/base.service';
import { Cargo } from '../models/cargo.model';
import { routesApi } from 'app/routes/api.routes';
import { ESemestre } from 'app/shared/enums/esemestre.enum';

@Injectable()
export class CargoService extends BaseService<Cargo>{

    getRota(): any {
        return new routesApi().getRoutes().cargo;
    }

    listarSemestres(): ESemestre[] {
        return [ESemestre.Primeiro, ESemestre.Segundo];
    }
}

