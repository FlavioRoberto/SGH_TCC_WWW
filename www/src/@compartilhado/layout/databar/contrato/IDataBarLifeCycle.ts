import { IDataBarBindService } from './IDataBarService';

export interface IDataBarLifeCycle<T> extends IDataBarBindService<T> {
    onClickNovaPesquisa: () => void;
}
