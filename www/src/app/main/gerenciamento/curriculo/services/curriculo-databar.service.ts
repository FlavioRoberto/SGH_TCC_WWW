import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';
import { CurriculoService } from './curriculo.service';
import { Curriculo } from '../model/curriculo.model';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';
import { tap } from 'rxjs/operators';
import { IDatabarBindOnClickService, EStatus, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';

export class CurriculoDataBarService implements IDatabarBindOnClickService<Curriculo> {

    eventDatabar: DatabarEventClickService;
    status: EStatus;
    onClickEnter: EventEmitter<Curriculo>;

    constructor(
        public formgroup: FormGroup,
        private _servico: CurriculoService,
        private _dataSource: ApExpansivelTableDataSource<ICurriculoDisciplina>) {

        this.onClickEnter = new EventEmitter();
        this.eventDatabar = new DatabarEventClickService((event: EEventoClick) => {
            // switch (event) {
            //     // case EEventoClick.onClickEditar: break;
            //     // default: this._dataSource.clear();
            // }
        });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): Curriculo {
        return this.formgroup.getRawValue() as Curriculo;
    }

    criar(): Observable<Curriculo> {
        const entidadeEnvio = this._prepararEntidadeParaEnvio();
        return this._servico.criar(entidadeEnvio)
            .pipe(tap(dados => this._constroiPreRequisitoDescricao(dados.disciplinas)));
    }

    editar(): Observable<Curriculo> {
        const entidadeEnvio = this._prepararEntidadeParaEnvio();
        return this._servico.editar(entidadeEnvio);
    }

    remover(): Observable<Curriculo> {
        return this._servico.remover(this.getEntidade().codigo)
            .pipe(tap(() => this._dataSource.clear()));
    }

    listarPaginacao(entidadePaginada: CurriculoPaginado): Observable<CurriculoPaginado> {
        return this._servico.listarPaginacao(entidadePaginada)
            .pipe(tap(dados => {
                this._constroiPreRequisitoDescricao(dados.entidade[0].disciplinas);
                this._dataSource.addRange(dados.entidade[0].disciplinas);
            }));
    }

    private _constroiPreRequisitoDescricao(dados: ICurriculoDisciplina[]): void {
        dados.forEach(dis => {
            if (dis.preRequisitos) {
                dis.preRequisitoDescricao = '';
                dis.preRequisitos.forEach((pr, i) => {
                    if (i === 0 || i >= dis.preRequisitos.length) {
                        dis.preRequisitoDescricao += pr.descricao;
                    } else {
                        dis.preRequisitoDescricao += ' - ' + pr.descricao;
                    }
                });
            }
        });
    }

    private _prepararEntidadeParaEnvio(): Curriculo {
        const disciplinas = this._dataSource.data;
        console.log(disciplinas);
        const entidadeEnvio = this.getEntidade();
        entidadeEnvio.disciplinas = disciplinas;
        return entidadeEnvio;
    }

}
