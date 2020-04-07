import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { HorarioModel } from '../../model/horario.model';

@Component({
    selector: 'horario-card',
    templateUrl: './view/horario-card.component.html',
    styleUrls: ['./view/horario-card.component.scss']
})
export class HorarioCardComponent implements OnDestroy {

    @Input() horario: HorarioModel = new HorarioModel();
    @Output() $remover = new EventEmitter<HorarioModel>();
    @Output() $editar = new EventEmitter<HorarioModel>();
    @Output() $selecionar = new EventEmitter<HorarioModel>();

    ngOnDestroy(): void {
        this.$remover.unsubscribe();
        this.$editar.unsubscribe();
        this.$selecionar.unsubscribe();
    }

    get semestreDescricao(): string {
        return this.horario?.semestre ? ESemestreLabel.get(this.horario.semestre) : '';
    }

    selecionar(event: Event): void {
        this.$selecionar.emit(this.horario);
    }

    editar(event: Event): void {
        event.stopPropagation();
        this.$editar.emit(this.horario);
    }

    remover(event: Event): void {
        event.stopPropagation();
        this.$remover.emit(this.horario);
    }
}
