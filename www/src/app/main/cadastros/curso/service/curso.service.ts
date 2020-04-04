import { Injectable } from '@angular/core';
import { ICurso } from '../model/curso.model';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from 'app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class CursoService extends BaseService<ICurso> {
    getRota(): any {
        return new routesApi().getRoutes().curso;
    }
}