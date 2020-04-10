import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroHorarioDataModel } from './model/cadastro-horario-data';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';

@Component({
    templateUrl: './views/cadastro-horario.dialog.component.html',
    styleUrls: ['./views/cadastrar-horario.dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CadastroHorarioDialogComponent implements OnInit {

    form: FormGroup;
    data: CadastroHorarioDataModel;
    emProgresso = false;

    constructor(
        private dialogRef: MatDialogRef<CadastroHorarioDialogComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) data: CadastroHorarioDataModel) {
        this.data = data;
    }

    ngOnInit(): void {
        this._construirFormulario();
        this._iniciarValoresFiltrados();
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    salvar(): void {

    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    private _iniciarValoresFiltrados(): void {
        this.form.patchValue(this.data.horarioFiltrado);
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            curriculo: [null],
            ano: [new Date().getFullYear()],
            periodo: [null],
            semestre: [null],
            turno: [null]
        });
    }
}
