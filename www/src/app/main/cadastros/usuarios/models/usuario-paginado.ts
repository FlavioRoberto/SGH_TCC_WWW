import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';
import { UsuarioModel } from './usuario.model';

export class UsuarioPaginado implements IDataEntidadePaginada<UsuarioModel>{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: UsuarioModel[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
