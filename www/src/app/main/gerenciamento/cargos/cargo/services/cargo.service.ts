import { Injectable } from '@angular/core';
import { BaseService } from '@compartilhado/services/base.service';
import { Cargo } from '../models/cargo.model';
import { routesApi } from 'app/routes/api.routes';

@Injectable()
export class CargoService extends BaseService<Cargo>{
    public getRota(): any {
        return new routesApi().getRoutes().cargo;
    }
}

