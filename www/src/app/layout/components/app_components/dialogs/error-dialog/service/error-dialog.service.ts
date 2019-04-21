import { MatDialogConfig, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../error-dialog.component';

@Injectable({
    providedIn: 'root'
})
export abstract class ErrorDialogService {

    titulo: string;
    mensagem: string;

    constructor(private dialog: MatDialog) { }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            titulo: this.titulo,
            mensagem: this.mensagem
        };

        dialogConfig.minWidth = "300px";

        this.dialog.open(ErrorDialogComponent, dialogConfig);

    }

    closeDialog() {
        this.dialog.closeAll();
    }
}
