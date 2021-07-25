import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { TipoModel } from './iTipo';

export class TipoPaginado implements IDataEntidadePaginada<TipoModel>{
    quantidade: number;
    total: number; 
    posicao: number;
    entidade: TipoModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
