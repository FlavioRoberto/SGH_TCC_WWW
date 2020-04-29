import { Component, Inject, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdicionarAulaDialogDataModel } from './models/adicionar-aula-dialog-data.model';
import { AdicionarAulaService } from './services/adicionar-aula.service';
import { finalize } from 'rxjs/operators';
import { AdicionarAulaDisciplinaModel } from './models/adicionar-aula-disciplina..model';
import { SalaModel } from 'app/main/cadastros/salas/sala/model/sala.model';
import { SalaService } from 'app/main/cadastros/salas/sala/services/sala.service';

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
    carregandoSalas = false;
    salas: SalaModel[];

    @ViewChild('filtroDisciplina', { static: true }) filtroDisciplina;
    @ViewChild('filtroSala', { static: true }) filtroSala;

    constructor(
        private dialogRef: MatDialogRef<AdicionarAulaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: AdicionarAulaDialogDataModel,
        private _adicionarAulaService: AdicionarAulaService,
        private _salaServico: SalaService,
        private _formBuilder: FormBuilder) {
        this.data = data;
    }

    ngOnInit(): void {
        this._listarDisciplinas();
        this._listarSalas();
        this._construirFormulario();
    }

    get possuiDesdobramento(): boolean {
        return this.form.get('desdobramento').value;
    }

    get desabilitarBotaoSalvar(): boolean {
        return this.form.invalid || this.form.errors?.length > 0;
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    onOpenedChangeDisciplina(): void {
        this.filtroDisciplina.nativeElement.value = '';
        this.filtroDisciplina.nativeElement.focus();
    }

    onOpenedChangeLista(): void {
        this.filtroSala.nativeElement.value = '';
        this.filtroSala.nativeElement.focus();
    }

    salvar(): void {

    }

    private _listarDisciplinas(): void {
        this.carregandoDisciplinas = true;
        this._adicionarAulaService.listarDisciplinas(this.data)
            .pipe(finalize(() => this.carregandoDisciplinas = false))
            .subscribe(disciplinas => this.disciplinas = disciplinas);
    }

    private _listarSalas(): void {
        this.carregandoSalas = true;

        this._salaServico.listarTodos()
            .pipe(finalize(() => this.carregandoSalas = false))
            .subscribe(salas => this.salas = salas);
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoDisciplina: [null],
            codigoSala: [null],
            desdobramento: [false],
            laboratorio: [null],
            descricaoTurmaDesdobramento: [null]
        });
    }

}
