import { HttpBaseService } from './http-base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDataEntidadePaginada } from '@breaking_dev/ic-databar-lib';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService<T> extends HttpBaseService<T> {

    protected abstract getRota(): any;

    constructor(private httpInjection: HttpClient) {
        super(httpInjection);
    }

    listarTodos(): Observable<T[]> {
        return this.getAll(this.getRota().listarTodos);
    }

    public listarPaginacao(entidade: IDataEntidadePaginada<T>): Observable<IDataEntidadePaginada<T>> {
        return this.postPaginacao(entidade, this.getRota().listarPaginacao);
    }

    criar(entidade: T): Observable<T> {
        return this.post(entidade, this.getRota().criar);
    }

    editar(entidade: T): Observable<T> {
        return this.put(entidade, this.getRota().editar);
    }

    remover(codigo: number): Observable<any> {
        return this.delete(this.getRota().remover + codigo);
    }

}