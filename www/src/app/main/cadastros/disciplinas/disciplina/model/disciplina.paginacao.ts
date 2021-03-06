import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { DisciplinaModel } from './disciplina';

export class DisciplinaPaginado implements IDataEntidadePaginada<DisciplinaModel>{
    quantidade: number;
    total: number; 
    posicao: number;
    entidade: DisciplinaModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
