import { IDisciplina } from './IDisciplina';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class DisciplinaPaginado implements IDataEntidadePaginada<IDisciplina>{
    quantidade: number;
    total: number; 
    posicao: number;
    entidade: IDisciplina[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
