import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CadastroHorarioDialogComponent } from '../cadastro-horario.dialog.component';
import { CadastroHorarioDataModel } from '../model/cadastro-horario-data';

@Injectable()
export class CadastroHorarioDialogService {

    private _dialogRef: MatDialogRef<CadastroHorarioDialogComponent>;

    constructor(private _dialog: MatDialog) { }

    abrirDialog(data: CadastroHorarioDataModel): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'cadastrar-horario-dialog';
        dialogConfig.disableClose = true;
        dialogConfig.data = data;
       
        this._dialogRef = this._dialog.open(CadastroHorarioDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        this._dialogRef.close();
    }

}
