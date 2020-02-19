import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { Disciplina } from './disciplina';

export class DisciplinaPaginado implements IDataEntidadePaginada<Disciplina>{
    quantidade: number;
    total: number; 
    posicao: number;
    entidade: Disciplina[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
