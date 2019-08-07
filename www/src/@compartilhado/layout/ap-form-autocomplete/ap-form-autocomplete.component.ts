import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { map, debounceTime, finalize } from 'rxjs/operators';

import { IFormAutocompleteAcao } from './contrato/IFormAutocompleteAcao';

@Component({
    selector: 'ap-form-autocomplete',
    templateUrl: './view/ap-form-autocomplete.component.html',
    styleUrls: ['./view/ap-form-autocomplete.component.scss']
})
export class ApFormAutocompleteComponent implements OnInit, OnDestroy {
    // Obrigatórios
    @Input() form: FormGroup;
    @Input() controlName: FormControlName;
    @Input() acao: IFormAutocompleteAcao;
    @Input() nomeEntidadeResposta: string;
    @Input() mensagemDeInformacaoDePesquisa: string;
    @Input() label: string;
    @Input() mensagemEntidadeCarregando: string;
    @Input() desabiltarBotaoNovaPesquisa: boolean;

    // Opcionais
    @Input() required = false;
    @Input() mensagemMatHint: string;
    @Input() condicaoErro: boolean;
    @Input() mensagemErro: string;
    @Input() novaPesquisaHabilitada = false;

    @Output() itemSelecionado = new EventEmitter<any>();
    @Output() alteracoesFormulario = new EventEmitter<any>();
    @Output() novaPesquisa = new EventEmitter<any>();
    @Output() onBlur = new EventEmitter<any>();

    timeoutPesquisa$: Subject<string> = new Subject<string>();
    itens$: Observable<any[]>;

    carregandoEntidade = false;
    realizouPesquisa = false;

    ngOnInit(): void {
        this._validaInputsObrigatorios();

        this.timeoutPesquisa$
            .pipe(debounceTime(500))
            .subscribe(filtro => this._filtrarEntidade(filtro));
    }

    verificaMudancas(): void {
        this.alteracoesFormulario.emit(null);
    }

    emitirDadoSelecionado(item: any): void {
        this.itemSelecionado.emit(item);
    }

    emitirNovaPesquisa(event: Event): void {
        event.preventDefault();

        this.novaPesquisa.emit(null);
    }

    ngOnDestroy(): void {
        this.timeoutPesquisa$.unsubscribe();
    }

    onBlurEvent(event): void {
        this.onBlur.emit(event);
    }

    private _filtrarEntidade(filtro: string): void {
        if (filtro.trim().length < 3) {
            return;
        }

        this.realizouPesquisa = true;
        this.carregandoEntidade = true;
        this.itens$ = this.acao.pesquisar(filtro)
            .pipe(map((res: any) => {
                return res;
            }
            ), finalize(() => this.carregandoEntidade = false));
    }

    private _validaInputsObrigatorios(): void {
        if (!this.form) {
            throw new Error('É obrigatório ter um formulário vinculado');
        }

        if (!this.controlName) {
            throw new Error('É obrigatório ter um formControlName vinculado');
        }

        if (!this.acao) {
            throw new Error('É obrigatório ter a interface IFormAutocompleteAcao declarada em seu componente');
        }

        if (!this.acao.matOptionValueBind) {
            throw new Error('É obrigatório implementar o método matOptionValueBind da interface IFormAutocompleteAcao');
        }

        if (!this.acao.pesquisar) {
            throw new Error('É obrigatório implementar o método pesquisar da interface IFormAutocompleteAcao');
        }

        // if (!this.nomeEntidadeResposta) {
        //     throw new Error('É obrigatório ter o @Input nomeEntidadeResposta vinculado');
        // }

        if (!this.mensagemDeInformacaoDePesquisa) {
            throw new Error('É obrigatório ter o @Input mensagemDeInformacaoDePesquisa vinculado');
        }

        if (!this.label) {
            throw new Error('É obrigatório ter o @Input label vinculado');
        }

        if (!this.mensagemEntidadeCarregando) {
            throw new Error('É obrigatório ter o @Input mensagemEntidadeCarregando vinculado');
        }
    }
}
