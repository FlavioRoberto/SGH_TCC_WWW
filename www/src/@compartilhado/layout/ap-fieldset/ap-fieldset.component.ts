import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'ap-fieldset',
    templateUrl: './view/ap-fieldset.component.html',
    styleUrls: ['./view/ap-fieldset.component.scss']
})
export class ApFieldsetComponent implements AfterViewInit {

    @Input() label: string;
    comFoco: boolean;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        const elements = this.elementRef.nativeElement.querySelector('fieldset')
            .querySelectorAll('input, select, mat-select');

        elements.forEach(element => {
            element
                .addEventListener('focus', this.setFocoFieldSet.bind(this));
            element
                .addEventListener('focusout', this.removeFocusFieldSet.bind(this));
        });
    }

    setFocoFieldSet(event: Event): void {
        this.comFoco = true;
    }

    removeFocusFieldSet(event: Event): void {
        this.comFoco = false;
    }

}
