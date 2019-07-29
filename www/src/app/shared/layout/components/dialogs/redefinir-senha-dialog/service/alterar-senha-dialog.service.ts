import { MatDialogConfig, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { AlterarSenhaDialogComponent } from '../alterar-senha-dialog.component';

@Injectable({
    providedIn: 'root'
})
export abstract class AlterarSenhaDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'alterar-senha-dialog';
        this.dialogRef = this.dialog.open(AlterarSenhaDialogComponent, dialogConfig);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
