import { BaseService } from 'app/compartilhado/services/base.service';
import { IDisciplina } from '../model/IDisciplina';
import { Injectable } from '@angular/core';
import { routesApi } from 'app/routes/api.routes';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService extends BaseService<IDisciplina>{
    getRota() {
        return new routesApi().getRoutes().disciplina.disciplina;
    }

}