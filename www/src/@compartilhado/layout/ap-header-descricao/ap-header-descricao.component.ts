import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-header-descricao',
    templateUrl: './ap-header-descricao.component.html',
    styleUrls: ['./ap-header-descricao.component.scss']
})
export class ApHeaderDescricaoComponent {
    @Input() navegacao: [String];
    @Input() titulo: String;
    constructor() {}
}
