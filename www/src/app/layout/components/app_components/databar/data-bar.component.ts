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

    novaPesquisa(): void {
        this.setStatus('Nova Pesquisa');
        this.form.reset();
        this.entidadePaginada = null;
    }

    pesquisar(): void {
        this.setStatus('Pesquisando');
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

    proximo(): void {
        this.setStatus('Pesquisando');
        this.acoesViewModel.ListarProximo();
    }

    anterior(): void {
        this.setStatus('Pesquisando');
        this.acoesViewModel.ListarAnterior();
    }

    ultimo(): void {
        this.setStatus('Pesquisando');
        this.acoesViewModel.Ultimo();
    }

    primeiro(): void {
        this.setStatus('Pesquisando');
        this.acoesViewModel.Primeiro();
    }
}
