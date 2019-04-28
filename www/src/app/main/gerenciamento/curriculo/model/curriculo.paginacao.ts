import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';
import { ICurriculo } from './curriculo.model';


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
