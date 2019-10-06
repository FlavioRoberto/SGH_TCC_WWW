import { ICurriculo } from './curriculo.model';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/idatabar-entidade-paginada';


export class CurriculoPaginado implements IDataEntidadePaginada<ICurriculo>
{
    total: number;
    posicao: number;
    entidade: ICurriculo;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }

}
