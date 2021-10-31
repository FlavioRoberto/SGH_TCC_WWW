import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VincularSalaDialogComponent } from './vincular-sala.component';
import { VincularSalaModel } from './models/vincular-sala.model';


@Injectable()
export class VincularSalaDialogService {

    constructor(private _dialog: MatDialog) { }

    abrirDialog(data: VincularSalaModel): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'vincular-sala-dialog';
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        this._dialog.open(VincularSalaDialogComponent, dialogConfig);
    }
}
