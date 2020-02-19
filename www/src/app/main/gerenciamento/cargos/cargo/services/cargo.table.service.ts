import { IExpansivelTableServico, PaginacaoExpansivelTable, IcExpansivelTableDataSource, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';
import { Injectable } from '@angular/core';
import { CargoDisciplina } from '../models/cargo-disciplina';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';

@Injectable()
export class CargoExpansivelTableService implements IExpansivelTableServico<CargoDisciplina>{

    metodoPesquisa = this._pesquisar;
    paginacaoExpansivelTable: PaginacaoExpansivelTable<CargoDisciplina>;
    dataSource: IcExpansivelTableDataSource<any>;
    acoes: AcoesExpansivelTable[];
    colunas: ColumnDef[];

    constructor() {
        this.dataSource = new IcExpansivelTableDataSource([{
            codigoCargo: 1,
            codigoCurriculoDisciplina: 1,
            cursoDescricao: 'Engenharia da computação',
            disciplinaDescricao: 'Inteligência Artifical',
            turno: '1'
        }] as CargoDisciplina[]);

        this.paginacaoExpansivelTable = new PaginacaoExpansivelTable();
        this.acoes = this._inicializarAcoes();
        this.colunas = this._inicializarColunas();
    }

    private _inicializarAcoes(): AcoesExpansivelTable[] {
        return [
            {
                descricao: 'Remover',
                executaMetodo: (data?: any, posicao?: number) => this._removerDisciplina(posicao),
                icone: 'delete',
                toolTip: 'Remover disciplina',
                expandir: false
            }
        ];
    }

    private _inicializarColunas(): ColumnDef[] {
        return [
            { def: 'cursoDescricao', titulo: 'Curso', value: null },
            { def: 'disciplinaDescricao', titulo: 'Disciplina', value: null }
        ];
    }

    private _pesquisar(filtro: PaginacaoExpansivelTable<any>, acaoFinalizar: () => void): void {

    }

    private _removerDisciplina(posicao: number): void {
        this.dataSource.removeByIndex(posicao);
    }
}
