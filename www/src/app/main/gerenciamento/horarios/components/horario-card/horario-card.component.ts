import { Component, Input } from '@angular/core';
import { ESemestreLabel } from 'app/shared/enums/esemestre.enum';

@Component({
    selector: 'horario-card',
    templateUrl: './view/horario-card.component.html',
    styleUrls: ['./view/horario-card.component.scss']
})
export class HorarioCardComponent {
    @Input() ano;
    @Input() semestre;
    @Input() cursoDescricao;
    @Input() periodo;
    @Input() turno;

    get semestreDescricao(): string {
        return this.semestre ? ESemestreLabel.get(this.semestre) : '';
    }
}
