import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './views/quadro-horario-aula.component.html'
})
export class QuadroHorarioAulaComponent implements OnInit {

    private _codigoHorario: number;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._recuperarCodigoHorarioSelecionado();
    }

    private _recuperarCodigoHorarioSelecionado(): void {
        this._route.params.subscribe(params => {
            this._codigoHorario = params['codigoHorario'] as number;
            console.log(this._codigoHorario);
        });
    }
}
