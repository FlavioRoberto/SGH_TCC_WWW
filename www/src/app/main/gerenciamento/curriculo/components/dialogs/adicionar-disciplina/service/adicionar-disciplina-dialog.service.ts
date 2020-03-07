import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Injectable, EventEmitter } from '@angular/core';
import { AdicionarDisciplinaDialogComponent } from '../adicionar-disciplina-dialog.component';
import { ICurriculoDisciplina } from 'app/main/gerenciamento/curriculo/model/curriculo-disciplina.model';
import { FormGroup } from '@angular/forms';
import { DisciplinaCurriculoDialoData } from '../../../model/disciplina-curriculo-dialog-data';

@Injectable()
export class AdicionarDisciplinaDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    abrirDialog(codigoCurriculo: number, titulo: string, onClickSalvar: (dados: ICurriculoDisciplina, form: FormGroup) => void, disciplinaEditar): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'adicionar-disciplina-dialog';
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
