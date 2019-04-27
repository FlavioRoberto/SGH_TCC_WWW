import { Injectable } from '@angular/core';
import { ICurso } from '../model/curso.model';
import { BaseService } from 'app/compartilhado/services/base.service';
import { routesApi } from 'app/routes/api.routes';

@Injectable({
    providedIn: 'root'
})
export class CursoService extends BaseService<ICurso> {
    getRota(): any {
        return new routesApi().getRoutes().curso;
    }
}