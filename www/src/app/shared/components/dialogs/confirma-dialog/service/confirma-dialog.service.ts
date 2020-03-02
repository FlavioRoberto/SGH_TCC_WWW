import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { ConfirmaDialogComponent } from '../confirma-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmaDialogService {

    acaoOk: any;
    emProgresso: boolean;
    mensagemCarregando: string;
    dialogRef: any;
    acaoCancelar: any;

    constructor(private dialog: MatDialog) { }

    abrirDialog(titulo: string, mensagem: string): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '300px';
        dialogConfig.maxWidth = '400px';

        dialogConfig.data = {
            titulo: titulo,
            mensagem: mensagem,
            acaoOk: this.acaoOk,
            emProgresso: this.emProgresso,
            mensagemCarregando: this.mensagemCarregando,
            acaoCancelar: this.acaoCancelar
        };

        this.dialogRef = this.dialog.open(ConfirmaDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }
}
