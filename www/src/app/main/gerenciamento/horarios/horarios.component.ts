import { Component, OnInit } from '@angular/core';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { HorarioModel } from './model/horario.model';
import { HorarioService } from './services/horario.service';

@Component({
    templateUrl: './view/horarios.component.html',
    styleUrls: ['./view/horarios.component.scss']
})
export class HorariosComponent implements OnInit {

    curriculos: CurriculoModel[] = [];
    turnos: TurnoModel[] = [];
    horarios: HorarioModel[] = [];
    periodos = EPeriodos;
    semestres = [ESemestre.Primeiro, ESemestre.Segundo];

    constructor(private _horarioServico: HorarioService) {
    }

    ngOnInit(): void {
        this._horarioServico.listar().subscribe(dados => this.horarios = dados);
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }
}
