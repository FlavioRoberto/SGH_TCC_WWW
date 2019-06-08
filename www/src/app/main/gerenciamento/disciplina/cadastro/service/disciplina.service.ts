import { IDisciplina } from '../model/IDisciplina';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';
import { BaseService } from '@compartilhado/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService extends BaseService<IDisciplina>{
    getRota() {
        return new routesApi().getRoutes().disciplina.disciplina;
    }

}