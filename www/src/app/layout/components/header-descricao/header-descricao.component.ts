import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-descricao',
    templateUrl: './header-descricao.component.html',
    styleUrls: ['./header-descricao.component.scss']
})
export class HeaderDescricaoComponent {
    @Input() navegacao: [String];
    @Input() titulo: String;
    constructor() {}
}
