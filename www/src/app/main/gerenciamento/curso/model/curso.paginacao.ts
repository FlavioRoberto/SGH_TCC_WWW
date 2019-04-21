import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';
import { ICurso } from './curso.model';

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
