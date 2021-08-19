import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Filtro } from "./filtro";

@Component({
    selector: 'sgh-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent {
    filtro:string = '';

    @Input() parametros: Filtro;

    filtrar(filtro: string): void {
        this.filtro = filtro;
    }

}