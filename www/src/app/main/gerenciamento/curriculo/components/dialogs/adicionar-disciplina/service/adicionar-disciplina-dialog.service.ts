import { MatDialogConfig, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { AdicionarDisciplinaDialogComponent } from '../adicionar-disciplina-dialog.component';

@Injectable()
export class AdicionarDisciplinaDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    openDialog(titulo: string): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'adicionar-disciplina-dialog';
        dialogConfig.data = {
            titulo
        };
        this.dialogRef = this.dialog.open(AdicionarDisciplinaDialogComponent, dialogConfig);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
