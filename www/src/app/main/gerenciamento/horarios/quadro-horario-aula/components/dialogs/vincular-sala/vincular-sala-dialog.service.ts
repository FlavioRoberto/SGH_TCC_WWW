import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VincularSalaDialogComponent } from './vincular-sala.component';
import { AulaModel } from '../../../model/aula.model';


@Injectable()
export class VincularSalaDialogService {

    constructor(private _dialog: MatDialog) { }

    abrirDialog(data: AulaModel): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'vincular-sala-dialog';
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        this._dialog.open(VincularSalaDialogComponent, dialogConfig);
    }
}
