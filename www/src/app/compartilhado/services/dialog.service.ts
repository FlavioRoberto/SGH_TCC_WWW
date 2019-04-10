import { MatDialogConfig, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class DialogService {

    titulo: string;
    mensagem: string;
    courseDialogComponent: any;
    acaoOk: any;

    constructor(private dialog: MatDialog) { }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            titulo: this.titulo,
            mensagem: this.mensagem,
            acaoOk: this.acaoOk
        };
        this.dialog.open(this.courseDialogComponent, dialogConfig);

    }

    closeDialog() {
        this.dialog.closeAll();
    }
}
