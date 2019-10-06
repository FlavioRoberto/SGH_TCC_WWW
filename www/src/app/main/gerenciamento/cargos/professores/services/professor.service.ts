import { Injectable } from '@angular/core';
import { BaseService } from '@compartilhado/services/base.service';
import { Professor } from '../models/professor.model';
import { routesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessorService extends BaseService<Professor>{
    public getRota(): any {
        return new routesApi().getRoutes().professor;
    }

    public listarAtivos(): Observable<Professor[]> {
        console.log(this.getRota());
        return this.getAll(this.getRota().listarAtivos);
    }
}
