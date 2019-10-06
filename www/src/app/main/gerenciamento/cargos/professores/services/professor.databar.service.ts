import { Injectable, EventEmitter } from '@angular/core';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/idata-bar-service';
import { Professor } from '../models/professor.model';
import { FormGroup } from '@angular/forms';
import { ProfessorService } from './professor.service';
import { Observable } from 'rxjs';
import { ProfessorPaginado } from '../models/professor-paginado.model';

@Injectable()
export class ProfessorDataBarService implements IDataBarBindService<Professor>{

    onClickEnter: EventEmitter<Professor>;

    constructor(public formgroup: FormGroup,
        private _servicoUsuario: ProfessorService
    ) {
    }

    getEntidade(): Professor {
       return this.formgroup.value as Professor;
    }

    criar(): Observable<Professor> {
        return this._servicoUsuario.criar(this.getEntidade());
    }

    editar(): Observable<Professor> {
        return this._servicoUsuario.editar(this.getEntidade());
    }

    remover(): Observable<Professor> {
        const codigoProfessor = this.getEntidade().codigo;
        return this._servicoUsuario.remover(codigoProfessor);
    }

    listarPaginacao(entidadePaginada: ProfessorPaginado): Observable<ProfessorPaginado> {
        return this._servicoUsuario.listarPaginacao(entidadePaginada);
    }

}
