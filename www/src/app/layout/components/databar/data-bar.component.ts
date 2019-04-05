import { Component, Input } from '@angular/core';
import { IDataBarBind } from './contrato/IDataBarBind';


@Component({
    selector: 'data-bar',
    templateUrl: './data-bar.component.html',
    styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent {
    @Input() acoesViewModel: IDataBarBind<any>;
    status: String = '';
    paginaAtual: number = 1;
    paginaTotal: number = 10;

    constructor() {

    }

    novaPesquisa(): void {
        this.status = 'Nova Pesquisa';

    }

    pesquisar(): void {

        this.status = 'Pesquisando';
        this.acoesViewModel.ListarPor();
    }

    inserir(): void {
        this.status = 'Inserindo';
        console.log(this.acoesViewModel);
        this.acoesViewModel.Criar();
    }

    editar(): void {
        this.status = 'Editando';
    }

    remover(): void {
        this.status = 'Removendo';
    }
}
