import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
    selector: 'ap-input-max-length',
    templateUrl: './views/input-max-length.html'
})
export class ApInputMaxLength {

    @Input() maxlength: number;
    @Input() minlength: number;
    @Input() condicaoErro: boolean;
    @Input() controlName: FormControlName;
    @Input() label: string;
    @Input() name: string;
    @Input() form: FormGroup;

    constructor() {
    }


}
