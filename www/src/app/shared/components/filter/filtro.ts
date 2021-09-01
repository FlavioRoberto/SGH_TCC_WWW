import { AbstractControl } from "@angular/forms";

export class Filtro<T> {
    label: string;
    control: AbstractControl;
    dados: T[];
    mensgemNaoEncontrado: string;
    mensagemCarregamento: string;
    atributoValue: string;
    desabilitar = false;
    carregando: boolean;
    multiplo = false;
    largura = "100%";
    textoExibicao: (item: any) => string;

    constructor(init?: Partial<Filtro<T>>) {
        Object.assign(this, init);
    }
}


