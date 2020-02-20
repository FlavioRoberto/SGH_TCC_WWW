import { Curriculo } from './curriculo.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';


export class CurriculoPaginado implements IDataEntidadePaginada<Curriculo>
{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: Curriculo[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }

}
