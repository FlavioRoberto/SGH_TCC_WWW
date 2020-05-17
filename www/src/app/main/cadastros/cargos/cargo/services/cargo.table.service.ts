import { IExpansivelTableServico, PaginacaoExpansivelTable, IcExpansivelTableDataSource, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';
import { Injectable } from '@angular/core';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { CargoService } from './cargo.service';
import { finalize } from 'rxjs/operators';
import { ConfirmaDialogService } from 'app/shared/components/dialogs/confirma-dialog/service/confirma-dialog.service';
import { CargoDisciplinaModel } from '../models/cargo-disciplina.model';
import { DisciplinaCargoDialogService } from '../components/disciplina-cargo-dialog/services/disciplina-cargo-dialog.service';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class CargoExpansivelTableService implements IExpansivelTableServico<CargoDisciplinaModel>{

    metodoPesquisa = this._pesquisar;
    paginacaoExpansivelTable: PaginacaoExpansivelTable<CargoDisciplinaModel>;
    dataSource: IcExpansivelTableDataSource<any>;
    acoes: AcoesExpansivelTable[];
    colunas: ColumnDef[];
    private _removendoDisciplina = false;

    constructor(
        private _servicoCargo: CargoService,
        private _confirmaDialogService: ConfirmaDialogService,
        private _disciplinaCargoDialogService: DisciplinaCargoDialogService,) {
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
                descricao: 'Editar',
                executaMetodo: (data?: any, posicao?: number) => this._editarDisciplina(data, posicao),
                icone: 'edit',
                toolTip: 'Editar disciplina',
                expandir: false
            },
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
            { def: 'descricao', titulo: 'Disciplina', value: null },
            { def: 'turnoDescricao', titulo: 'Turno', value: null }
        ];
    }

    private _pesquisar(filtro: PaginacaoExpansivelTable<any>, acaoFinalizar: () => void): void {
    }

    private _editarDisciplina(disciplina: CargoDisciplinaModel, posicao: number): void {
        this._disciplinaCargoDialogService.abrirDialog(
            disciplina.codigoCargo,
            () => this.carregarDisciplinas(disciplina.codigoCargo).subscribe(),
            disciplina);
    }

    private _removerDisciplina(disciplina: CargoDisciplinaModel, posicao: number): void {
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

        this._confirmaDialogService.abrirDialog('Atenção', `Deseja remover a disciplina ${disciplina.descricao} do cargo?`);
    }


    public carregarDisciplinas(codigoCargo: number): Observable<CargoDisciplinaModel[]> {
        return new Observable(observer => {
            console.log(codigoCargo);
            this._adicionarDisciplinasDatatable(codigoCargo, observer);
        });
    }

    private _adicionarDisciplinasDatatable(codigoCargo: number, observer: Subscriber<CargoDisciplinaModel[]>): void {
        this._servicoCargo.listarDisciplinas(codigoCargo)
            .subscribe(disciplinas => {
                console.log(disciplinas);
                this.dataSource.clear();
                this.dataSource.addRange(disciplinas);
                observer.next(disciplinas);
            }, erros => observer.error(erros), () => observer.complete());
    }
}
