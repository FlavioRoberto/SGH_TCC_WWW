import { CurriculoModule } from '../curriculo.module';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';

export class CurriculoDataBarService implements IDataBarBindService<CurriculoModule>{

    onClickEnter: EventEmitter<CurriculoModule>;

    constructor(public formgroup: FormGroup) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): CurriculoModule {
        throw new Error('Method not implemented.');
    }

    criar(): Observable<CurriculoModule> {
        throw new Error('Method not implemented.');
    }

    editar(): Observable<CurriculoModule> {
        throw new Error('Method not implemented.');
    }
    remover(): Observable<CurriculoModule> {
        throw new Error('Method not implemented.');
    }

    listarPaginacao(IDataEntidadePaginada: any): Observable<CurriculoPaginado> {
        throw new Error('Method not implemented.');
    }

}