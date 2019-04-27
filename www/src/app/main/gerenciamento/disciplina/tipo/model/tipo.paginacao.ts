import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';
import { ITipo } from './ITipo';

export class TipoPaginado implements IDataEntidadePaginada<ITipo>{
    total: number; posicao: number;
    entidade: ITipo;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }
}