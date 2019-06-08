import { IDisciplina } from './IDisciplina';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';

export class DisciplinaPaginado implements IDataEntidadePaginada<IDisciplina>{
    total: number; posicao: number;
    entidade: IDisciplina;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }
}