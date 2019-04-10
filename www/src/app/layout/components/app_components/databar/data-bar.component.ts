import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataBarBind } from './contrato/IDataBarBind';
import { FormGroup } from '@angular/forms';
import { IDataEntidadePaginada } from './contrato/IDataEntidadePaginada';
import { DialogService } from 'app/compartilhado/services/dialog.service';
import { ConfirmaDialogComponent } from '../confirma-dialog/confirma-dialog.component';


@Component({
    selector: 'data-bar',
    templateUrl: './view/data-bar.component.html',
    styleUrls: ['./view/data-bar.component.scss']
})
export class DataBarComponent<T> {
    @Input() acoesViewModel: IDataBarBind<T>;
    @Input() form: FormGroup;
    @Input() entidadePaginada: IDataEntidadePaginada<any>;
    @Output() statusChanged = new EventEmitter<string>();
    status: string = '';

    public operacao;

    constructor(private _dialog: DialogService) {
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
        this.entidadePaginada.posicao = 0;
        this.entidadePaginada.total = 0;
    }

    pesquisar(): void {
        this.setStatus('Pesquisando');
        this.entidadePaginada.entidade = this._getEntidade();
        this.acoesViewModel.ListarPaginacao();
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
            case 'Inserindo': this.acoesViewModel.Criar(); break;
            case 'Editando': this.acoesViewModel.Editar(); break;
        }
    }

    private _exibirDialogConfirmacao() {
        this._dialog.mensagem = "Você realmente deseja excluir este registro?";
        this._dialog.titulo = "Atenção";
        this._dialog.acaoOk = () => this.acoesViewModel
            .Remover()
            .subscribe(success => {
                console.log(success);
                this._dialog.closeDialog();
                this.acoesViewModel.ListarPaginacao();
            }, error => console.log(error));
        this._dialog.courseDialogComponent = ConfirmaDialogComponent;
        this._dialog.openDialog();
    }

    private _paginar(acao: string): void {
        this.setStatus('Pesquisando');
        this.entidadePaginada.entidade = null;

        switch (acao) {
            case 'primeiro': this.entidadePaginada.posicao = 1; break;
            case 'ultimo': this.entidadePaginada.posicao = this.entidadePaginada.total; break;
            case 'proximo': this.entidadePaginada.posicao++; break;
            case 'anterior': this.entidadePaginada.posicao--; break;
        }

        this.acoesViewModel.ListarPaginacao();
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



}
