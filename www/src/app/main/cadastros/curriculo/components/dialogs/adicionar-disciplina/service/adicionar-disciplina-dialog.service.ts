import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Injectable, EventEmitter } from '@angular/core';
import { AdicionarDisciplinaDialogComponent } from '../adicionar-disciplina-dialog.component';
import { FormGroup } from '@angular/forms';
import { DisciplinaCurriculoDialoData } from '../../../model/disciplina-curriculo-dialog-data';
import { CurriculoDisciplinaModel } from 'app/main/cadastros/curriculo/model/curriculo-disciplina.model';

@Injectable()
export class AdicionarDisciplinaDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    abrirDialog(codigoCurriculo: number, titulo: string, onClickSalvar: (dados: CurriculoDisciplinaModel, form: FormGroup) => void, disciplinaEditar): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'adicionar-disciplina-dialog';
        dialogConfig.disableClose = true;

        dialogConfig.data = {
            codigoCurriculo,
            titulo,
            onClickSalvar: onClickSalvar,
            disciplinaEditar
        } as DisciplinaCurriculoDialoData;


        this.dialogRef = this.dialog.open(AdicionarDisciplinaDialogComponent, dialogConfig);

        // return this.dialogRef.afterClosed();

    }

    fecharDialog(): void {
        this.dialogRef.close();
    }
}
