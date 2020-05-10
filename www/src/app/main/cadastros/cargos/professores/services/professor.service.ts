import { Injectable } from '@angular/core';
import { BaseService } from 'app/core/services/base.service';
import { Professor } from '../models/professor.model';
import { RoutesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessorService extends BaseService<Professor>{
    public getRota(): any {
        return new RoutesApi().getRoutes().professor;
    }

    public listarAtivos(): Observable<Professor[]> {
        console.log(this.getRota());
        return this.getAll(this.getRota().listarAtivos);
    }
}
