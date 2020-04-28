import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';
import { CurriculoService } from './curriculo.service';
import { CurriculoModel } from '../model/curriculo.model';
import { CurriculoDisciplinaModel } from '../model/curriculo-disciplina.model';
import { tap } from 'rxjs/operators';
import { IDatabarBindOnClickService, EStatus, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';

export class CurriculoDataBarService implements IDatabarBindOnClickService<CurriculoModel> {

    eventDatabar: DatabarEventClickService;
    status: EStatus;
    onClickEnter: EventEmitter<CurriculoModel>;

    constructor(
        public formgroup: FormGroup,
        private _servico: CurriculoService,
        private _dataSource: ApExpansivelTableDataSource<CurriculoDisciplinaModel>) {

        this.onClickEnter = new EventEmitter();
        this.eventDatabar = new DatabarEventClickService((event: EEventoClick) => {
            switch (event) {
                case EEventoClick.afterClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): CurriculoModel {
        return this.formgroup.getRawValue() as CurriculoModel;
    }

    criar(): Observable<CurriculoModel> {
        const entidadeEnvio = this._prepararEntidadeParaEnvio();
        return this._servico.criar(entidadeEnvio);
    }

    editar(): Observable<CurriculoModel> {
        const entidadeEnvio = this._prepararEntidadeParaEnvio();
        return this._servico.editar(entidadeEnvio);
    }

    remover(): Observable<CurriculoModel> {
        return this._servico.remover(this.getEntidade().codigo)
            .pipe(tap(() => this._dataSource.clear()));
    }

    listarPaginacao(entidadePaginada: CurriculoPaginado): Observable<CurriculoPaginado> {

        return new Observable(observer => {
            this._servico.listarPaginacao(entidadePaginada)
                .subscribe(
                    dados => this._listarDisciplinas(dados?.entidade[0]?.codigo,
                        () => observer.next(dados),
                        erro => observer.error(erro),
                        observer.complete),
                    erros => observer.error(erros));
        });
    }

    private _listarDisciplinas(codigo: number, sucesso: () => void, erro: (erro: any) => void, complete: () => void): void {
        this._servico.listarDisciplinas(codigo)
            .subscribe(disciplinas => {
                this._constroiPreRequisitoDescricao(disciplinas);
                sucesso();
            }, erro, complete);
    }

    private _constroiPreRequisitoDescricao(dados: CurriculoDisciplinaModel[]): void {
        dados.forEach(dis => {
            this.constroiPreRequisitosDescricao(dis);
        });

        this._dataSource.addRange(dados);
    }

    public constroiPreRequisitosDescricao(disciplina: CurriculoDisciplinaModel): void {
        if (disciplina.preRequisitos) {
            disciplina.preRequisitoDescricao = '';
            disciplina.preRequisitos.forEach((pr, i) => {
                if (i === 0 || i >= disciplina.preRequisitos.length) {
                    disciplina.preRequisitoDescricao += pr.descricaoDisciplina;
                } else {
                    disciplina.preRequisitoDescricao += ' - ' + pr.descricaoDisciplina;
                }
            });
        }
    }

    private _prepararEntidadeParaEnvio(): CurriculoModel {
        return this.getEntidade();
    }

}
