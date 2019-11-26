import { ICurriculo } from './curriculo.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';


export class CurriculoPaginado implements IDataEntidadePaginada<ICurriculo>
{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: ICurriculo[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }

}
