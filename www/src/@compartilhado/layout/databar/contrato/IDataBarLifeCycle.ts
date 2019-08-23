import { EStatus } from '../enum/estatus';

export abstract class IDataBarLifeCycle<T> {
    onClickAcaoDatabar: (status: EStatus) => void;
}
