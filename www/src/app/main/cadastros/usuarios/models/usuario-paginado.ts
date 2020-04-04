import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

export class UsuarioPaginado implements IDataEntidadePaginada<IUsuario>{
    quantidade: number;
    total: number;
    posicao: number;
    entidade: IUsuario[];

    constructor() {
        this.quantidade = 1;
        this.total = 0;
        this.posicao = 0;
    }
}
