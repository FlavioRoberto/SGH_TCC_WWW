import { CargoModel } from './cargo.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class CargoPaginado implements IDataEntidadePaginada<CargoModel>{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: CargoModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
        this.entidade = [];
    }
}
