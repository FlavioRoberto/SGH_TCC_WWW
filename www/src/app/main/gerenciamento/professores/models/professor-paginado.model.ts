import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';
import { Professor as Professor } from './professor.model';

export class ProfessorPaginado implements IDataEntidadePaginada<Professor>{
    total: number;
    posicao: number;
    entidade: Professor;

    constructor() {
        this.total = 0;
        this.posicao = 0;
        this.entidade = new Professor();
    }
}
