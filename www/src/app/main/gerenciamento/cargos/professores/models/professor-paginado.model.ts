import { Professor as Professor } from './professor.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class ProfessorPaginado implements IDataEntidadePaginada<Professor>{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: Professor[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
        this.entidade = [];
    }
}
