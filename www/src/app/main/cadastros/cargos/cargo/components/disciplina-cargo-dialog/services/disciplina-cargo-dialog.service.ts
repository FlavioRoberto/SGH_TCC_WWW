import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CargoDisciplina } from '../../../models/cargo-disciplina';
import { DisciplinaCargoDialogComponent } from '../disciplina-cargo-dialog.component';
import { DisciplinaCargoDialogData } from '../contratos/disciplina-cargo-dialog-data';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { CurriculoService } from 'app/main/cadastros/curriculo/services/curriculo.service';

@Injectable()
export class DisciplinaCargoDialogService {

    private static _dialogRef: MatDialogRef<any>;

    constructor(private dialog: MatDialog) {
    }

    abrirDialog(codigoCargo: number, onClickSalvar: (dados: CargoDisciplina) => void): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.panelClass = 'disciplina-cargo-dialog';
        dialogConfig.disableClose = true;
        
        dialogConfig.data = {
            onClickSalvar: onClickSalvar,
            onClickFechar: this.fecharDialog,
            curriculos: this._curriculos,
            codigoCargo: codigoCargo,
            turnos: this._turnos
        } as DisciplinaCargoDialogData;

        DisciplinaCargoDialogService._dialogRef = this.dialog.open(DisciplinaCargoDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        DisciplinaCargoDialogService._dialogRef.close();
    }

}
