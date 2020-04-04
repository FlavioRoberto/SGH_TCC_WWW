import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CargoDisciplina } from '../../../models/cargo-disciplina';
import { DisciplinaCargoDialogComponent } from '../disciplina-cargo-dialog.component';
import { IDisciplinaCargoDialogData } from '../contratos/disciplina-cargo-dialog-data';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { CurriculoService } from 'app/main/cadastros/curriculo/services/curriculo.service';

@Injectable()
export class DisciplinaCargoDialogService {

    private static _dialogRef: MatDialogRef<any>;
    private _turnos: TurnoModel[];
    private _curriculos: CurriculoModel[];

    constructor(private dialog: MatDialog, private _turnoService: TurnoService, private _curriculoService: CurriculoService) {
        this._carregarTurnos();
        this._carregarCurriculo();
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
        } as IDisciplinaCargoDialogData;

        DisciplinaCargoDialogService._dialogRef = this.dialog.open(DisciplinaCargoDialogComponent, dialogConfig);
    }

    fecharDialog(): void {
        DisciplinaCargoDialogService._dialogRef.close();
    }

    private _carregarTurnos(): void {
        this._turnoService.listarTodos()
            .subscribe(dados => this._turnos = dados);
    }

    private _carregarCurriculo(): void {
        this._curriculoService.listarTodos()
            .subscribe(dados => this._curriculos = dados);
    }

}
