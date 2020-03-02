import { IExpansivelTableServico, PaginacaoExpansivelTable, IcExpansivelTableDataSource, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';
import { Injectable } from '@angular/core';
import { CargoDisciplina } from '../models/cargo-disciplina';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { CargoService } from './cargo.service';
import { finalize } from 'rxjs/operators';
import { ConfirmaDialogService } from 'app/shared/components/dialogs/confirma-dialog/service/confirma-dialog.service';

@Injectable()
export class CargoExpansivelTableService implements IExpansivelTableServico<CargoDisciplina>{

    metodoPesquisa = this._pesquisar;
    paginacaoExpansivelTable: PaginacaoExpansivelTable<CargoDisciplina>;
    dataSource: IcExpansivelTableDataSource<any>;
    acoes: AcoesExpansivelTable[];
    colunas: ColumnDef[];
    private _removendoDisciplina = false;

    constructor(private _servicoCargo: CargoService, private _confirmaDialogService: ConfirmaDialogService) {
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
            { def: 'disciplinaDescricao', titulo: 'Disciplina', value: null },
            { def: 'turnoDescricao', titulo: 'Turno', value: null }
        ];
    }

    private _pesquisar(filtro: PaginacaoExpansivelTable<any>, acaoFinalizar: () => void): void {
    }

    private _removerDisciplina(disciplina: CargoDisciplina, posicao: number): void {
        this._confirmaDialogService.emProgresso = false;

        this._confirmaDialogService.acaoOk = () => {
            this._confirmaDialogService.emProgresso = true;
            this._servicoCargo.removerDisciplina(disciplina.codigo)
                .pipe(finalize(() => {
                    this._confirmaDialogService.emProgresso = false;
                    this._confirmaDialogService.fecharDialog();
                }))
                .subscribe(() => this.dataSource.removeByIndex(posicao));
        };

        this._confirmaDialogService.dialogRef = 'Dialog remover disciplina.';

        this._confirmaDialogService.mensagemCarregando = `Removendo disciplina ${disciplina.cursoDescricao} do cargo...`;

        this._confirmaDialogService.abrirDialog('Atenção', `Deseja remover a disciplina ${disciplina.disciplinaDescricao} do cargo?`);
    }
}
