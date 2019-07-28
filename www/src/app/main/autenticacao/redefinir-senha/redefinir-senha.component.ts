import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RedefinirSenhaService } from './services/redefinir-senha.service';

@Component({
    templateUrl: './view/redefinir-senha.component.html',
    styleUrls: ['./view/redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {

    redefinirSenhaForm: FormGroup;
    emProgresso = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private _servico: RedefinirSenhaService) {
    }

    ngOnInit(): void {
        this.redefinirSenhaForm = this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]]
        });
    }

    redefinir(): void {
        this.emProgresso = true;
        const email = this.redefinirSenhaForm.get('email').value;
        this._servico.redefinirSenha(email)
            .subscribe(
                success => {
                    this.exibirSnackBar(success);
                    this.emProgresso = false;
                },
                error => this.emProgresso = false
            );
    }

    private exibirSnackBar(mensagem: string): void {
        //   'Senha redefinida com sucesso! Foi enviado um e-mail com seus dados de acesso.'
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'sucesso',
            horizontalPosition: 'center'
        });
    }

}
