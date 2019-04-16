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
    emProgresso: boolean;

    constructor(private dialog: MatDialog) { }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            titulo: this.titulo,
            mensagem: this.mensagem,
            acaoOk: this.acaoOk,
            emProgresso: this.emProgresso
        };
        this.dialog.open(ConfirmaDialogComponent, dialogConfig);

    }

    closeDialog() {
        this.dialog.closeAll();
    }
}
