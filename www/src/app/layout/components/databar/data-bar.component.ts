import { Component } from '@angular/core';

@Component({
    selector: 'data-bar',
    templateUrl: './data-bar.component.html',
    styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent {
    status: String = '';
    paginaAtual: number = 1;
    paginaTotal: number = 10;

    constructor() {}

    novaPesquisa(): void {
        this.status = 'Nova Pesquisa';
    }

    pesquisar(): void {
        this.status = 'Pesquisando';
    }

    inserir(): void {
        this.status = 'Inserindo';
    }

    editar(): void {
        this.status = 'Editando';
    }

    remover(): void {
        this.status = 'Removendo';
    }
}
