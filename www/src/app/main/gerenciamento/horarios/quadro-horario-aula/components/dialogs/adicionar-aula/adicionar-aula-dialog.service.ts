import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AdicionarAulaDialogDataModel } from './models/adicionar-aula-dialog-data.model';
import { AdicionarAulaDialogComponent } from './adicionar-aula.dialog.component';

@Injectable()
export class AdicionarAulaDialogService {

    constructor(private _dialog: MatDialog) { }

    abrirDialog(data: AdicionarAulaDialogDataModel): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'adicionar-aula-dialog';
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        this._dialog.open(AdicionarAulaDialogComponent, dialogConfig);
    }
}
