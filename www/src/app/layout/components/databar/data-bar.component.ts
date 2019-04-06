import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataBarBind } from './contrato/IDataBarBind';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'data-bar',
    templateUrl: './data-bar.component.html',
    styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent {
    @Input() acoesViewModel: IDataBarBind<any>;
    @Input() form: FormGroup;
    @Output() statusChanged = new EventEmitter<string>();
    status: string = '';

    public operacao;
    paginaAtual = 1;
    paginaTotal = 10;

    constructor() {
        console.log(this.form);
    }

    private setStatus(status: string): void {
        this.status = status;
        this.statusChanged.emit(this.status);
    }

    novaPesquisa(): void {
        this.setStatus('Nova Pesquisa');
    }

    pesquisar(): void {
        this.setStatus('Pesquisando');
        this.acoesViewModel.ListarPor();
    }

    inserir(): void {
        this.setStatus('Inserindo');
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
}
