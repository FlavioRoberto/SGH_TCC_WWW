import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Filtro } from "./filtro";

@Component({
    selector: 'sgh-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnDestroy{
  
    filtro:string = '';

    @Output() valorSelecionado = new EventEmitter<any>();
    @Input() parametros: Filtro<any>;

    filtrar(filtro: string): void {
        this.filtro = filtro;
    }

    selecionar(item){
        this.valorSelecionado.emit(item);
    }

    ngOnDestroy(): void {
        this.valorSelecionado.unsubscribe();
    }

}