import { CursoModel } from './curso.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class CursoPaginado implements IDataEntidadePaginada<CursoModel>
{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: CursoModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 1;
    }

}
