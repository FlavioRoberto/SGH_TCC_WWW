import { EStatus } from '../enum/estatus';
import { IDataBarBindService } from './idata-bar-service';

export interface IDataBarLifeCycle<T> extends IDataBarBindService<T> {
    onClickAcaoDatabar: (status: EStatus) => void;
}
