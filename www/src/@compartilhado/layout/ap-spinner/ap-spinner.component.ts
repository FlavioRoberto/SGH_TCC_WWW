import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ap-spinner',
    templateUrl: './view/ap-spinner.html',
    styleUrls: ['./view/ap-spinner.scss'],
})
export class ApSpinnerComponent implements OnInit {


    @Input() visivel: boolean;
    @Input() diametro: number;
    @Input() cor: string;


    ngOnInit(): void {

        this.cor = "accent";
    }


}