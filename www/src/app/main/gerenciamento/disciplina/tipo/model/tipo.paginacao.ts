import { ITipo } from './ITipo';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class TipoPaginado implements IDataEntidadePaginada<ITipo>{
    quantidade: number;
    total: number; 
    posicao: number;
    entidade: ITipo[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
