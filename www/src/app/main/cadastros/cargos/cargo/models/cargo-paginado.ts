import { Cargo } from './cargo.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class CargoPaginado implements IDataEntidadePaginada<Cargo>{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: Cargo[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
        this.entidade = [];
    }
}
