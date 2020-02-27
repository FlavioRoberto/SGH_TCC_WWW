import { IExpansivelTableServico, PaginacaoExpansivelTable, IcExpansivelTableDataSource, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';
import { Injectable } from '@angular/core';
import { CargoDisciplina } from '../models/cargo-disciplina';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { CargoService } from './cargo.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CargoExpansivelTableService implements IExpansivelTableServico<CargoDisciplina>{

    metodoPesquisa = this._pesquisar;
    paginacaoExpansivelTable: PaginacaoExpansivelTable<CargoDisciplina>;
    dataSource: IcExpansivelTableDataSource<any>;
    acoes: AcoesExpansivelTable[];
    colunas: ColumnDef[];
    private _removendoDisciplina = false;

    constructor(private _servicoCargo: CargoService) {
        this.dataSource = new IcExpansivelTableDataSource();
        this.paginacaoExpansivelTable = new PaginacaoExpansivelTable();
        this.acoes = this._inicializarAcoes();
        this.colunas = this._inicializarColunas();
    }

    get removendoDisciplina(): boolean {
        return this._removendoDisciplina;
    }

    private _inicializarAcoes(): AcoesExpansivelTable[] {
        return [
            {
                descricao: 'Remover',
                executaMetodo: (data?: any, posicao?: number) => this._removerDisciplina(data, posicao),
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

    private _removerDisciplina(disciplina: CargoDisciplina, posicao: number): void {
        this._removendoDisciplina = true;
        this._servicoCargo.removerDisciplina(disciplina.codigo)
            .pipe(finalize(() => this._removendoDisciplina = false))
            .subscribe(() => this.dataSource.removeByIndex(posicao));
    }
}
