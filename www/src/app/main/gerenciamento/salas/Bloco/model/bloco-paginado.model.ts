import { BlocoModel } from './bloco.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class BlocoPaginadoModel implements IDataEntidadePaginada<BlocoModel> {
    total: number;
    posicao: number;
    entidade: BlocoModel[];
    quantidade: number;
}
