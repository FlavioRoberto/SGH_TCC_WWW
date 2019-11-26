import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataEntidadePaginada, EStatus, IDataBarBindService } from '@breaking_dev/ic-databar-lib';
import { FormGroup } from '@angular/forms';

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