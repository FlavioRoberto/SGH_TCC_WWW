import { CurriculoModel } from './curriculo.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';


export class CurriculoPaginado implements IDataEntidadePaginada<CurriculoModel>
{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: CurriculoModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }

}
