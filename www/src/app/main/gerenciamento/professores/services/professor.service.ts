import { Injectable } from '@angular/core';
import { BaseService } from '@compartilhado/services/base.service';
import { Professor } from '../models/professor.model';
import { routesApi } from 'app/routes/api.routes';

@Injectable()
export class ProfessorService extends BaseService<Professor>{
    public getRota(): any {
        return new routesApi().getRoutes().professor;
    }
}
