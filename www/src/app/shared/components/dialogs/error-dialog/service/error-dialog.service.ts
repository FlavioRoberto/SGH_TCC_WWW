import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { ErrorDialogComponent } from '../error-dialog.component';

@Injectable({
    providedIn: 'root'
})
export abstract class ErrorDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    openDialog(titulo: string, mensagem: string): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            titulo: titulo,
            mensagem: mensagem
        };

        dialogConfig.minWidth = '300px';

        this.dialogRef = this.dialog.open(ErrorDialogComponent, dialogConfig);

    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
