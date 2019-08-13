import { CurriculoModule } from '../curriculo.module';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';
import { CurriculoService } from './curriculo.service';
import { ICurriculo } from '../model/curriculo.model';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';

export class CurriculoDataBarService implements IDataBarBindService<ICurriculo>{

    onClickEnter: EventEmitter<ICurriculo>;

    constructor(
        public formgroup: FormGroup,
        private _servico: CurriculoService,
        private _dataSource: ApExpansivelTableDataSource<ICurriculoDisciplina>) {

        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): ICurriculo {
        return this.formgroup.getRawValue() as ICurriculo;
    }

    criar(): Observable<ICurriculo> {
        const disciplinas = this._dataSource.data;
        const entidadeEnvio = this.getEntidade();
        entidadeEnvio.disciplinas = disciplinas;
        return this._servico.criar(entidadeEnvio);
    }

    editar(): Observable<ICurriculo> {
        throw new Error('Method not implemented.');
    }
    remover(): Observable<ICurriculo> {
        throw new Error('Method not implemented.');
    }

    listarPaginacao(IDataEntidadePaginada: any): Observable<CurriculoPaginado> {
        throw new Error('Method not implemented.');
    }

}