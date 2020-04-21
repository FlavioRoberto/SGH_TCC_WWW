import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './views/quadro-horario-aula.component.html'
})
export class QuadroHorarioAulaComponent implements OnInit {

    horarios = ['07:00', '08:00', '09:00', 'Intervalo', '10:00', '11:00', '12:00'];

    diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    aulas = [
        {
            horario: '07:00',
            dia: 'Segunda',
            professor: 'Flávio'
        },
        {
            horario: '09:00',
            dia: 'Segunda',
            professor: 'Flávio'
        },
    ];

    retornarAulas(horario: string, diaSemana: string): any[] {
        return this.aulas.filter(lnq => lnq.dia === diaSemana && lnq.horario === horario);
    }

    existeHorario(horario, dia): boolean {
        return this.aulas.filter(lnq => lnq.dia === dia && lnq.horario === horario).length > 0;
    }

    private _codigoHorario: number;

    dataSource = [];

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
