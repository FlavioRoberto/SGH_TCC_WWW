import { ICurso } from './curso.model';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';

export class CursoPaginado implements IDataEntidadePaginada<ICurso>
{
    total: number;
    posicao: number;
    entidade: ICurso;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }

}
