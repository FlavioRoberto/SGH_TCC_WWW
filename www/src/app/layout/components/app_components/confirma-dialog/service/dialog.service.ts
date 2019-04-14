import { MatDialogConfig, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ConfirmaDialogComponent } from '../confirma-dialog.component';

@Injectable({
    providedIn: 'root'
})
export abstract class DialogService {

    titulo: string;
    mensagem: string;
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
        this.dialog.open(ConfirmaDialogComponent, dialogConfig);

    }

    closeDialog() {
        this.dialog.closeAll();
    }
}
