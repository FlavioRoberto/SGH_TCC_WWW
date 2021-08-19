import { AbstractControl, FormControl } from "@angular/forms";

export interface Filtro {
    label: string;
    control: AbstractControl;
    dados: any[];
    mensgemNaoEncontrado: string;
    atributoValue: string;
    textoExibicao: (item: any) => string;
}

 