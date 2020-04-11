import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroHorarioDataModel } from './model/cadastro-horario-data';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { HorarioModel } from '../../../model/horario.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './views/cadastro-horario.dialog.component.html',
    styleUrls: ['./views/cadastrar-horario.dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CadastroHorarioDialogComponent implements OnInit {

    form: FormGroup;
    data: CadastroHorarioDataModel;
    emProgresso = false;
    turnos: TurnoModel[];
    carregandoTurnos = false;

    constructor(
        private dialogRef: MatDialogRef<CadastroHorarioDialogComponent>,
        private _formBuilder: FormBuilder,
        private _turnoService: TurnoService,
        @Inject(MAT_DIALOG_DATA) data: CadastroHorarioDataModel) {
        this.data = data;
    }

    get horario(): HorarioModel {
        return this.form.getRawValue() as HorarioModel;
    }

    get desabilitarBotaoSalvar(): boolean {
        return this.form.invalid;
    }

    ngOnInit(): void {
        this._construirFormulario();
        this._iniciarValoresFiltrados();
        this._carregarTurnos();
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    salvar(): void {
        const acaoSalvar = () => {
            this.data.salvar(this.horario);
            this.dialogRef.close();
        };

        if (this.data.horarioFiltrado.codigo)
            return this._editar(acaoSalvar);

        return this._inserir(acaoSalvar);
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    private _inserir(acao: () => void): void {
        acao();
        console.log('inserindo');
    }

    private _editar(acao: () => void): void {
        acao();
        console.log('editando');
    }

    private _iniciarValoresFiltrados(): void {
        this.form.patchValue(this.data.horarioFiltrado);
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            codigoCurriculo: [null, [Validators.required]],
            ano: [new Date().getFullYear(), [Validators.required, Validators.minLength(4)]],
            periodo: [null, [Validators.required]],
            semestre: [null, [Validators.required]],
            turno: [null, [Validators.required]]
        });
    }

    private _carregarTurnos(): void {
        this.carregandoTurnos = true;
        this._turnoService.listarTodos()
            .pipe(finalize(() => this.carregandoTurnos = false))
            .subscribe(turnos => {
                this.turnos = turnos;
                if (turnos.length > 0)
                    this.form.get('turno').setValue(turnos[0].codigo);
            });
    }
}
