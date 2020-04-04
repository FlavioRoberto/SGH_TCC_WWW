import { TurnoModel } from './turno.interface';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib/public-api';

export class TurnoPaginado implements IDataEntidadePaginada<TurnoModel>{
    quantidade: number;
    total: number; posicao: number;
    entidade: TurnoModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
