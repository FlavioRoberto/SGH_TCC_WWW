import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';
import { Cargo } from './cargo.model';

export class CargoPaginado implements IDataEntidadePaginada<Cargo>{
    total: number;
    posicao: number;
    entidade: any;

    constructor() {
        this.total = 0;
        this.posicao = 0;
        this.entidade = 0;
    }
}
