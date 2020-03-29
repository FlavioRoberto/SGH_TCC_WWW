import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { SalaModel } from './sala.model';

export class SalaPaginada implements IDataEntidadePaginada<SalaModel>  {
    total: number;
    posicao: number;
    entidade: SalaModel[];
    quantidade: number;
}
