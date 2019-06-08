import { ITurno } from './turno.interface';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';

export class TurnoPaginado implements IDataEntidadePaginada<ITurno>{
    total: number; posicao: number;
    entidade: ITurno;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }
}