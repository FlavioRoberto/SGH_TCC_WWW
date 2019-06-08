import { Injectable } from '@angular/core';

Injectable({
    providedIn: 'root'
})
export enum EStatus {
    novaPesquisa = 'Nova Pesquisa',
    inserindo = 'Inserindo',
    editando = 'Editando',
    removendo = 'Removendo',
    dadosCarregados = 'Dados Carregados',
    pesquisando = 'Pesquisando',
    executarAcao = 'Executar Ação'
}