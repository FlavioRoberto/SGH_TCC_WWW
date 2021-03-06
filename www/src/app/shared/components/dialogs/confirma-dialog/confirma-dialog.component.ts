import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OnInit, Inject, Component } from '@angular/core';

@Component({
    selector: 'confirma-dialog',
    templateUrl: './view/confirma-dialog.html'
})
export class ConfirmaDialogComponent implements OnInit {

    mensagem: string;
    titulo: string;
    acaoOk: any;
    emProgresso: boolean;
    mensagemCarregando: string;
    acaoCancelar: any;

    constructor(
        private dialogRef: MatDialogRef<ConfirmaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.mensagem = data.mensagem;
        this.titulo = data.titulo;
        this.acaoOk = data.acaoOk;
        this.emProgresso = data.emProgresso;
        this.mensagemCarregando = data.mensagemCarregando;
        this.acaoCancelar = data.acaoCancelar;
    }

    ngOnInit(): void {

    }

    ok(): void {
        this.emProgresso = true;
        this.acaoOk();
    }

    close(): void {
        this.acaoCancelar();
        this.dialogRef.close();
    }
}

