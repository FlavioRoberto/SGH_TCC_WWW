import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';
import { CurriculoService } from './curriculo.service';
import { ICurriculo } from '../model/curriculo.model';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';
import { IDataBarLifeCycle } from '@compartilhado/layout/databar/contrato/IDataBarLifeCycle';
import { retry, tap } from 'rxjs/operators';
import { IDisciplina } from '../../disciplina/cadastro/model/IDisciplina';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

export class CurriculoDataBarService extends IDataBarLifeCycle<ICurriculo> implements IDataBarBindService<ICurriculo> {

    onClickEnter: EventEmitter<ICurriculo>;

    constructor(
        public formgroup: FormGroup,
        private _servico: CurriculoService,
        private _dataSource: ApExpansivelTableDataSource<ICurriculoDisciplina>) {

        super();
        this.onClickEnter = new EventEmitter();
        this.onClickAcaoDatabar = (status: EStatus) => {
            if (EStatus.editando !== status) {
                this._dataSource.clear();
            }
        };

    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): ICurriculo {
        return this.formgroup.getRawValue() as ICurriculo;
    }

    criar(): Observable<ICurriculo> {
        console.log('dados disciplina', this._dataSource.data)
        const disciplinas = this._dataSource.data;
        const entidadeEnvio = this.getEntidade();
        entidadeEnvio.disciplinas = disciplinas;

        return this._servico.criar(entidadeEnvio)
            .pipe(tap(dados => this._constroiPreRequisitoDescricao(dados.disciplinas)));
    }

    editar(): Observable<ICurriculo> {
        throw new Error('Method not implemented.');
    }

    remover(): Observable<ICurriculo> {
        return this._servico.remover(this.getEntidade().codigo)
            .pipe(tap(i => this._dataSource.clear()));
    }

    listarPaginacao(entidadePaginada: CurriculoPaginado): Observable<CurriculoPaginado> {
        return this._servico.listarPaginacao(entidadePaginada)
            .pipe(tap(dados => {
                this._constroiPreRequisitoDescricao(dados.entidade.disciplinas);
                this._dataSource.addRange(dados.entidade.disciplinas);
            }));
    }


    private _constroiPreRequisitoDescricao(dados: ICurriculoDisciplina[]): void {
        dados.forEach(dis => {
            dis.preRequisitoDescricao = dis.disciplina.descricao;
        });
    }

}
