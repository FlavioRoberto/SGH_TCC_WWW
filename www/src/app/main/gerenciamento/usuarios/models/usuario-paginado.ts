import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';
import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';

export class UsuarioPaginado implements IDataEntidadePaginada<IUsuario>{
    total: number = 0;
    posicao: number = 0;
    entidade: IUsuario;
}
