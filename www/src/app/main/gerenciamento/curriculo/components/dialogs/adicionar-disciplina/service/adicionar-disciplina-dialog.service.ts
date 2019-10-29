import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Injectable, EventEmitter } from '@angular/core';
import { AdicionarDisciplinaDialogComponent } from '../adicionar-disciplina-dialog.component';
import { ICurriculoDisciplina } from 'app/main/gerenciamento/curriculo/model/curriculo-disciplina.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AdicionarDisciplinaDialogService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    openDialog(titulo: string, onClickSalvar: (dados: ICurriculoDisciplina, form: FormGroup) => void, disciplina): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.panelClass = 'adicionar-disciplina-dialog';
        dialogConfig.data = {
            titulo,
            onClickSalvar: onClickSalvar,
            disciplina
        };
        this.dialogRef = this.dialog.open(AdicionarDisciplinaDialogComponent, dialogConfig);

        // return this.dialogRef.afterClosed();

    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
