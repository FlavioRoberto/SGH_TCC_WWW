import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataBarBind } from './contrato/IDataBarBind';
import { FormGroup } from '@angular/forms';
import { IDataEntidadePaginada } from './contrato/IDataEntidadePaginada';
import { DialogService } from '../dialogs/confirma-dialog/service/dialog.service';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'data-bar',
    templateUrl: './view/data-bar.component.html',
    styleUrls: ['./view/data-bar.component.scss']
})
export class DataBarComponent<T> implements OnInit {

    @Input() acoesViewModel: IDataBarBind<T>;
    @Input() form: FormGroup;
    @Input() entidadePaginada: IDataEntidadePaginada<any>;
    @Output() statusChanged = new EventEmitter<string>();
    status: string = '';
    emProgresso: boolean;

    public operacao;

    constructor(private _dialog: DialogService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.setStatus('Executar Ação');
        this.setProgresso(false);
    }

    private setProgresso(progresso: boolean) {
        this.emProgresso = progresso;
        if (progresso)
            this.form.disable();
        else
            this.form.enable();
    }

    private openSnackBar(message: string, classe: string) {
        this.snackBar.open(message, "OK", {
            duration: 3000,
            panelClass: classe
        });
    }

    private setStatus(status: string): void {
        this.status = status;
        this.statusChanged.emit(this.status);
    }

    private _getEntidade(): T {
        const result = this.form.value as T;
        console.log(result);
        return result;
    }

    novaPesquisa(): void {
        this.setStatus('Nova Pesquisa');
        this.form.reset();
        this.entidadePaginada.entidade = this.form.value;
        this.entidadePaginada.posicao = 0;
        this.entidadePaginada.total = 0;
    }

    pesquisar(): void {
        this.setStatus('Pesquisando');
        this.entidadePaginada.entidade = this._getEntidade();
        this._paginar();
    }

    inserir(): void {
        this.setStatus('Inserindo');
        this.form.reset();
    }

    editar(): void {
        this.setStatus('Editando');
    }

    remover(): void {
        this.setStatus('Removendo');
        this._exibirDialogConfirmacao();
    }

    salvar(): void {
        switch (this.status) {
            case 'Inserindo':
                this.setProgresso(true);
                this.acoesViewModel
                    .Criar()
                    .subscribe(success => {
                        this.setProgresso(false);
                        this.form.setValue(success);
                        this.setStatus('Nova Pesquisa');
                    }, error => this.setProgresso(false)); break;

            case 'Editando':
                this.setProgresso(true);
                this.acoesViewModel.Editar()
                    .subscribe(success => {
                        this.setProgresso(false);
                        this.form.setValue(success);
                        this.setStatus('Nova Pesquisa');
                    }, error => this.setProgresso(false)
                    ); break;
        }
    }

    private _exibirDialogConfirmacao() {
        this._dialog.mensagem = "Você realmente deseja excluir este registro?";
        this._dialog.titulo = "Atenção";
        this._dialog.acaoMensagem = "Removendo registro...";
        this._dialog.acaoOk = () => this.acoesViewModel
            .Remover()
            .subscribe(success => {
                this._dialog.closeDialog();
                this._resetForm();
                this.setStatus('Nova Pesquisa');
                this._dialog.emProgresso = false;
                this.openSnackBar("Removido com sucesso", "sucesso");
            }, error => this._dialog.emProgresso = false);
        this._dialog.openDialog();
    }

    private _paginar(acao?: string): void {
        this.setStatus('Pesquisando');

        if (this.entidadePaginada.entidade == null)
            this.entidadePaginada.entidade = this._getEntidade();

        switch (acao) {
            case 'primeiro': this.entidadePaginada.posicao = 1; break;
            case 'ultimo': this.entidadePaginada.posicao = this.entidadePaginada.total; break;
            case 'proximo': this.entidadePaginada.posicao++; break;
            case 'anterior': this.entidadePaginada.posicao--; break;
            default: this.entidadePaginada.posicao = 0; break;
        }

        this.setProgresso(true);
        this.acoesViewModel.ListarPaginacao(this.entidadePaginada)
            .subscribe(
                success => {
                    if (success.entidade == null) {
                        this._resetForm();
                        return;
                    }
                    this.setStatus('Dados Carregados');

                    if (!this.entidadePaginada.entidade) {
                        this.entidadePaginada = success;
                    }
                    else {
                        this.entidadePaginada.total = success.total;
                        this.entidadePaginada.posicao = success.posicao;
                    }
                    this.form.setValue(success.entidade);
                    this.setProgresso(false);
                }, error => {
                    this.setStatus('Nova Pesquisa');
                    this.setProgresso(false);
                });
    }

    proximo(): void {
        this._paginar('proximo');
    }

    anterior(): void {
        this._paginar('anterior');
    }

    ultimo(): void {
        this._paginar('ultimo');
    }

    primeiro(): void {
        this._paginar('primeiro');
    }

    private _resetForm(): void {
        this.form.reset();
        this.entidadePaginada.entidade = null;
        this.entidadePaginada.posicao = 0;
        this.entidadePaginada.total = 0;
    }
}
