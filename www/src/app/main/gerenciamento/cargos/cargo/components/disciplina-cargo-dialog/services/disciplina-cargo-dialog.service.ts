import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CargoDisciplina } from '../../../models/cargo-disciplina';
import { DisciplinaCargoDialogComponent } from '../disciplina-cargo-dialog.component';
import { IDisciplinaCargoDialogData } from '../contratos/disciplina-cargo-dialog-data';
import { Curriculo } from 'app/main/gerenciamento/curriculo/model/curriculo.model';

@Injectable()
export class DisciplinaCargoDialogService {

    private static _dialogRef: MatDialogRef<any>;

    constructor(private dialog: MatDialog) { }

    abrirDialog(codigoCargo: number, curriculos: Curriculo[], onClickSalvar: (dados: CargoDisciplina) => void): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'disciplina-cargo-dialog';

        dialogConfig.data = {
            onClickSalvar: onClickSalvar,
            onClickFechar: this.fecharDialog,
            curriculos: curriculos,
            codigoCargo: codigoCargo
        } as IDisciplinaCargoDialogData;

        DisciplinaCargoDialogService._dialogRef = this.dialog.open(DisciplinaCargoDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        DisciplinaCargoDialogService._dialogRef.close();
    }

}
