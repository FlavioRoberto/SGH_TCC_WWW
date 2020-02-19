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
            curso: 'Engenharia da computação',
            disciplina: { descricao: 'Engenharia de software', codigo: 1 }
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
            { def: 'curso', titulo: 'Curso', value: null },
            { def: 'disciplina', titulo: 'Disciplina', value: 'descricao' }
        ];
    }

    private _pesquisar(filtro: PaginacaoExpansivelTable<any>, acaoFinalizar: () => void): void {
        
    }

    private _removerDisciplina(posicao: number): void {
        this.dataSource.removeByIndex(posicao);
    }
}
