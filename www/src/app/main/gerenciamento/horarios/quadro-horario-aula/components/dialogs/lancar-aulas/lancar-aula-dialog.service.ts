import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LancarAulaDialogComponent } from './lancar-aula-dialog.component';
import { LancarAulaDialogDataModel } from './models/lancar-aula-dialog.model';

@Injectable()
export class LancarAulaDialogService {

    constructor(private _dialog: MatDialog) { }

    abrirDialog(data: LancarAulaDialogDataModel): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'adicionar-aula-dialog';
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        this._dialog.open(LancarAulaDialogComponent, dialogConfig);
    }
}
