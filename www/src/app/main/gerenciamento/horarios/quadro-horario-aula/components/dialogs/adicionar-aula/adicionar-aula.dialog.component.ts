import { Component, Inject, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdicionarAulaDialogDataModel } from './models/adicionar-aula-dialog-data.model';
import { AdicionarAulaService } from './services/adicionar-aula.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './views/adicionar-aula-dialog.component.html',
    styleUrls: ['./views/adicionar-aula-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdicionarAulaDialogComponent implements OnInit {
    form: FormGroup;
    data: AdicionarAulaDialogDataModel;
    salvando = false;
    disciplinas: AdicionarAulaDisciplinaModel[];
    carregandoDisciplinas = false;

    @ViewChild('filtroDisciplina', { static: true }) filtroDisciplina;

    constructor(
        private dialogRef: MatDialogRef<AdicionarAulaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: AdicionarAulaDialogDataModel,
        private _adicionarAulaService: AdicionarAulaService,
        private _formBuilder: FormBuilder) {
        this.data = data;
    }

    ngOnInit(): void {
        this._listarDisciplinas();
        this._construirFormulario();
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    onOpenedChangeDisciplina(): void {
        this.filtroDisciplina.nativeElement.focus();
    }

    private _listarDisciplinas(): void {
        this.carregandoDisciplinas = true;
        this._adicionarAulaService.listarDisciplinas(this.data)
            .pipe(finalize(() => this.carregandoDisciplinas = false))
            .subscribe(disciplinas => this.disciplinas = disciplinas);
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoDisciplina: []
        });
    }

}
