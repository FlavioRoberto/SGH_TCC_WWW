import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private _snackBar: MatSnackBar) { }

    exibirSnackBarSucesso(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'sucesso',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }

    exibirSnackBarInformativo(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'info',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }

    exibirSnackBarErro(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'erro',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }
}
