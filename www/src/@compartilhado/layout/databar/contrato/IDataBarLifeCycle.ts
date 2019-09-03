import { EStatus } from '../enum/estatus';
import { IDataBarBindService } from './IDataBarService';

export interface IDataBarLifeCycle<T> extends IDataBarBindService<T> {
    onClickAcaoDatabar: (status: EStatus) => void;
}
