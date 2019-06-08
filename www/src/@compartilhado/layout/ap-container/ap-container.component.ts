import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ap-container',
    templateUrl: './ap-container.component.html',
    styleUrls: ['./ap-container.component.scss']
})
export class ApContainerComponent implements OnInit {

    @Input() titulo: string;

    constructor() { }

    ngOnInit() {
    }

}
