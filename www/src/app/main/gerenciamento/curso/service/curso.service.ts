import { Injectable } from '@angular/core';
import { ICurso } from '../model/curso.model';
import { routesApi } from 'app/routes/routes.api';
import { BaseService } from 'app/compartilhado/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class CursoService extends BaseService<ICurso> {
    getRota(): any {
        return new routesApi().getRoutes().curso;
    }
}