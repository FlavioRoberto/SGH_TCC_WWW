import { Injectable, EventEmitter } from '@angular/core';
import { Professor } from '../models/professor.model';
import { FormGroup } from '@angular/forms';
import { ProfessorService } from './professor.service';
import { Observable } from 'rxjs';
import { ProfessorPaginado } from '../models/professor-paginado.model';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';

@Injectable()
export class ProfessorDataBarService implements IDataBarBindService<Professor>{
    status: EStatus;

    onClickEnter: EventEmitter<Professor>;

    constructor(
        public formgroup: FormGroup,
        private _servicoUsuario: ProfessorService) {
        this.onClickEnter = new EventEmitter();
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
