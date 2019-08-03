import { Injectable } from '@angular/core';

Injectable({
    providedIn: 'root'
})
export enum EStatus {
    novaPesquisa = 'Nova pesquisa',
    inserindo = 'Inserindo',
    editando = 'Editando',
    removendo = 'Removendo',
    dadosCarregados = 'Dados carregados',
    pesquisando = 'Pesquisando',
    executarAcao = 'Executar ação'
}

