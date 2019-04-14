import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OnInit, Inject, Component } from '@angular/core';

@Component({
    selector: 'confirma-dialog',
    templateUrl: './view/error-dialog.html',
})
export class ErrorDialogComponent {

    mensagem: string;
    titulo: string;

    constructor(
        private dialogRef: MatDialogRef<ErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.mensagem = data.mensagem;
        this.titulo = data.titulo;
    }

    close() {
        this.dialogRef.close();
    }
}

