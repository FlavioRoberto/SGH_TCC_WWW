import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';

export interface IDataBarBindService<T> {

    formgroup: FormGroup;
    criar(): Observable<T>;
    editar(): Observable<T>;
    remover(): Observable<T>;
    listarPaginacao(entidadePaginada: IDataEntidadePaginada<T>): Observable<IDataEntidadePaginada<T>>
}