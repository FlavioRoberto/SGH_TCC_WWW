import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurriculoPaginado } from '../model/curriculo.paginacao';
import { EventEmitter } from '@angular/core';
import { CurriculoService } from './curriculo.service';
import { Curriculo } from '../model/curriculo.model';
import { ICurriculoDisciplina } from '../model/curriculo-disciplina.model';
import { tap, finalize } from 'rxjs/operators';
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
        this.eventDatabar = new DatabarEventClickService((event: EEventoClick) => { });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): Curriculo {
        return this.formgroup.getRawValue() as Curriculo;
    }

    criar(): Observable<Curriculo> {
        const entidadeEnvio = this._prepararEntidadeParaEnvio();
        return this._servico.criar(entidadeEnvio);
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

    private _constroiPreRequisitoDescricao(dados: ICurriculoDisciplina[]): void {
        dados.forEach(dis => {
            this.constroiPreRequisitosDescricao(dis);
        });

        this._dataSource.addRange(dados);
    }

    public constroiPreRequisitosDescricao(disciplina: ICurriculoDisciplina): void {
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

    private _prepararEntidadeParaEnvio(): Curriculo {
        return this.getEntidade();
    }
    
}
