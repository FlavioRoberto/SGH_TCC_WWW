import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DisciplinaCargoDialogComponent } from '../disciplina-cargo-dialog.component';
import { DisciplinaCargoDialogData } from '../contratos/disciplina-cargo-dialog-data';
import { CargoDisciplinaModel } from '../../../models/cargo-disciplina.model';

@Injectable()
export class DisciplinaCargoDialogService {

    private static _dialogRef: MatDialogRef<any>;

    constructor(private dialog: MatDialog) {
    }

    abrirDialog(codigoCargo: number, onClickSalvar: (dados: CargoDisciplinaModel) => void): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'disciplina-cargo-dialog';
        dialogConfig.disableClose = true;
        
        dialogConfig.data = {
            onClickSalvar: onClickSalvar,
            onClickFechar: this.fecharDialog,
            codigoCargo: codigoCargo
        } as DisciplinaCargoDialogData;

        DisciplinaCargoDialogService._dialogRef = this.dialog.open(DisciplinaCargoDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        DisciplinaCargoDialogService._dialogRef.close();
    }

}
