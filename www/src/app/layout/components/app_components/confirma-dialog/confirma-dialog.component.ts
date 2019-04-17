import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OnInit, Inject, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'confirma-dialog',
    templateUrl: './view/confirma-dialog.html',
})
export class ConfirmaDialogComponent implements OnInit {

    mensagem: string;
    titulo: string;
    acaoOk: any;
    emProgresso: boolean;
    acaoMensagem: string;

    constructor(
        private dialogRef: MatDialogRef<ConfirmaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.mensagem = data.mensagem;
        this.titulo = data.titulo;
        this.acaoOk = data.acaoOk;
        this.emProgresso = data.emProgresso;
        this.acaoMensagem = data.acaoMensagem;
    }

    ngOnInit() {

    }

    ok() {
        this.emProgresso = true;
        this.acaoOk();
    }

    close() {
        this.dialogRef.close();
    }
}

