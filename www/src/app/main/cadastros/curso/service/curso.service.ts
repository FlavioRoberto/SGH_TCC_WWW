import { Injectable } from '@angular/core';
import { CursoModel } from '../model/curso.model';
import { RoutesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class CursoService extends BaseService<CursoModel> {
    getRota(): any {
        return new RoutesApi().getRoutes().curso;
    }
}