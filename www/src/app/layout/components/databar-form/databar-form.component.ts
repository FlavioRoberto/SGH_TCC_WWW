import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { IDataEntidadePaginada } from '@compartilhado/layout/databar/contrato/IDataEntidadePaginada';
import { FormGroup } from '@angular/forms';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';

@Component({
    selector: 'databar-form',
    templateUrl: './databar-form.component.html',
    styleUrls: ['./databar-form.component.scss']
})
export class DataBarFormComponent {
    @Input() servicoBind: IDataBarBindService<any>;
    @Input() form: FormGroup;
    @Input() navegacao: string[];
    @Input() entidadePaginada: IDataEntidadePaginada<any>;
    @Output() statusChanged = new EventEmitter<EStatus>();

    statusAlterado(status): void {
        this.statusChanged.emit(status)
    }

}