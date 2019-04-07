import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataBarBind } from './contrato/IDataBarBind';
import { FormGroup } from '@angular/forms';
import { IDataEntidadePaginada } from './contrato/IDataEntidadePaginada';


@Component({
    selector: 'data-bar',
    templateUrl: './data-bar.component.html',
    styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent {
    @Input() acoesViewModel: IDataBarBind;
    @Input() form: FormGroup;
    @Input() entidadePaginada: IDataEntidadePaginada<any>;
    @Output() statusChanged = new EventEmitter<string>();
    status: string = '';

    public operacao;


    constructor() {
        console.log(this.form);
    }

    private setStatus(status: string): void {
        this.status = status;
        this.statusChanged.emit(this.status);
    }

    private _getEntidade(): any {
        return this.form.getRawValue();
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
    }

    salvar(): void {
        switch (this.status) {
            case 'Inserindo': this.acoesViewModel.Criar(); break;
            case 'Editando': break;
        }
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
