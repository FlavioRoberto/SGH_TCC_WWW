import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';
import { IDisciplina } from './IDisciplina';

export class DisciplinaPaginado implements IDataEntidadePaginada<IDisciplina>{
    total: number; posicao: number;
    entidade: IDisciplina;

    constructor() {
        this.total = 0;
        this.posicao = 0;
    }
}