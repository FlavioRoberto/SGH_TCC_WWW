import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-progress-bar',
    templateUrl: './view/ap-progress-bar.html',
})
export class ApProgressBarComponent {

    @Input() visivel: boolean;
    @Input() circular: boolean;
    @Input() diametro: number;
}