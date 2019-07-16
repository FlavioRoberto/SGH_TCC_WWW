import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

declare type Tipo = 'number' | 'text' | 'password';

@Component({
    selector: 'ap-input-max-length',
    templateUrl: './views/input-max-length.html'
})
export class ApInputMaxLength {
    @Input() maxlength: number;
    @Input() minlength: number;
    @Input() condicaoErro: boolean;
    @Input() mensagemErro: string;
    @Input() controlName: FormControlName;
    @Input() label: string;
    @Input() name: string;
    @Input() form: FormGroup;
    @Input() tipo: Tipo;
    @Input() toggleSenha: boolean;
    @Input() required = false;
    @Input() permitirEspacos = true;
    @Input() textoMatHint: string;

    toggle = true;

    constructor() {}

    aplicarEspacos(event: Event): void {
        if (!this.permitirEspacos) {
            event.preventDefault();
        }
    }
}
