import { Component } from '@angular/core';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';

@Component({
    templateUrl: './view/horarios.component.html',
    styleUrls: ['./view/horarios.component.scss']
})
export class HorariosComponent {
    curriculos: CurriculoModel[];
    turnos: TurnoModel[];
    periodos = EPeriodos;
    semestres = [ESemestre.Primeiro, ESemestre.Segundo];

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }
}
