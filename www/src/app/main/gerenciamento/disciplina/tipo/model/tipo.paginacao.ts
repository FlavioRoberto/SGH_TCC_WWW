import { ITipo } from './ITipo';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';

export class TipoPaginado implements IDataEntidadePaginada<ITipo>{
    total: number; posicao: number;
    entidade: ITipo;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }
}