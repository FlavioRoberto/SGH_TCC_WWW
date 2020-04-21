import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuadroHorarioModel } from './model/quadro-horario-model';
import { QuadroHorarioAulaService } from './services/quadro-horario-aula.service';

@Component({
    templateUrl: './views/quadro-horario-aula.component.html',
    styleUrls: ['./views/quadro-horario-aula.component.scss']
})
export class QuadroHorarioAulaComponent implements OnInit {

    private _codigoHorario: number;
    horarios = [];
    diasDaSemana = [];
    aulas = [];

    constructor(private _route: ActivatedRoute, private _quadroHorarioAulaService: QuadroHorarioAulaService) { }

    ngOnInit(): void {
        this._recuperarCodigoHorarioSelecionado();
        this.horarios = this._quadroHorarioAulaService.listarHorarios();
        this.diasDaSemana = this._quadroHorarioAulaService.listarDiasSemana();
        this.aulas = this._quadroHorarioAulaService.listarAulas();
    }

    retornarAulas(horario: string, diaSemana: string): any[] {
        return this.aulas.filter(lnq => lnq.dia === diaSemana && lnq.horario === horario);
    }

    existeHorario(horario, dia): boolean {
        return this.aulas.filter(lnq => lnq.dia === dia && lnq.horario === horario).length > 0;
    }

    private _recuperarCodigoHorarioSelecionado(): void {
        this._route.params.subscribe(params => {
            this._codigoHorario = params['codigoHorario'] as number;
            console.log(this._codigoHorario);
        });
    }
}
