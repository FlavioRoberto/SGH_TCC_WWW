import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnInit, Inject, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlterarSenhaService } from './service/alterar-senha.service';
import { IAtualizarSenha } from './models/IAtualizarSenha';

@Component({
    selector: 'alterar-senha-dialog',
    templateUrl: './view/alterar-senha-dialog.component.html',
    styleUrls: ['./view/alterar-senha-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AlterarSenhaDialogComponent implements OnInit {

    alterarSenhaForm: FormGroup;
    emProgresso = false;

    constructor(
        private _formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<AlterarSenhaDialogComponent>,
        private _service: AlterarSenhaService,
        private _snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) data) {

    }

    ngOnInit(): void {

        this.alterarSenhaForm = this._formBuilder.group({
            senha: [null, [Validators.required]],
            novaSenha: [null, [Validators.required]],
            confirmeNovaSenha: [null, [Validators.required]]
        }, { validator: this.verificarSenhas });

    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    alterarSenha(): void {
        this.emProgresso = true;
        const dados = this.alterarSenhaForm.value as IAtualizarSenha;
        this._service.atualizarSenha(dados)
            .subscribe(
                success => {
                    this.fecharDialog();
                    this.exibirSnackBar(success);
                    this.emProgresso = false;
                },
                error => {
                    this.emProgresso = false;
                });
    }


    verificarSenhas(group: FormGroup): any { // here we have the 'passwords' group
        const novaSenha = group.controls.novaSenha.value;
        const confirmeNovaSenha = group.controls.confirmeNovaSenha.value;
        const retorno = novaSenha === confirmeNovaSenha ? null : { senhasDiferentes: true };
        return retorno;
    }

    private exibirSnackBar(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'sucesso',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }

}





