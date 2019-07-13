import { CurriculoModule } from '../curriculo.module';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';

export class CurriculoDataBarService implements IDataBarBindService<CurriculoModule>{
    onClickEnter: import("@angular/core").EventEmitter<CurriculoModule>;

    constructor(public formgroup: FormGroup) {

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