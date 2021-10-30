import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaModel } from 'app/main/cadastros/salas/sala/model/sala.model';
import { SalaService } from 'app/main/cadastros/salas/sala/services/sala.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import { AulaModel } from '../../../model/aula.model';
import { LancarAulaDialogComponent } from '../lancar-aulas/lancar-aula-dialog.component';
import { VincularSalaService } from './services/vincular-sala.service';
import { VincularSalaDialogService } from './vincular-sala-dialog.service';

@Component({
    templateUrl: './views/vincular-sala.component.html',
    styleUrls: ['./views/vincular-sala.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VincularSalaDialogComponent implements OnInit {

    form: FormGroup;
    carregandoSalas = false;
    salas: SalaModel[];
    salvando = false;
    @ViewChild("filtroSala", { static: true }) filtroSala;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: AulaModel,
        private _dialogRef: MatDialogRef<LancarAulaDialogComponent>,
        private _salaServico: SalaService,
        private _vincularSalaServico: VincularSalaService,
        private _formBuilder: FormBuilder) { }


    get salaSelecionada(): number {
        return this.form.get('codigoSala').value;
    }

    get desabilitarBotaoSalvar(): boolean {
        return (
            this.form.invalid || this.form.errors?.length > 0 || this.salvando || !this.salaSelecionada
        );
    }

    ngOnInit(): void {
        this._listarSalas();
        this.form = this._formBuilder.group({
            codigoSala: [null]
        })
    }

    salvar(): void {
        this.salvando = true;
        this._vincularSalaServico.vincular(this.salaSelecionada, this.data.codigo)
            .pipe(finalize(() => this.salvando = false))
            .subscribe()
    }

    onOpenedChangeLista(): void {
        this.filtroSala.nativeElement.value = "";
        this.filtroSala.nativeElement.focus();
    }


    fecharDialog(): void {
        this._dialogRef.close();
    }

    private _listarSalas(): void {
        this.carregandoSalas = true;

        this._salaServico
            .listarTodos()
            .pipe(finalize(() => (this.carregandoSalas = false)))
            .subscribe((salas) => (this.salas = salas));
    }

}