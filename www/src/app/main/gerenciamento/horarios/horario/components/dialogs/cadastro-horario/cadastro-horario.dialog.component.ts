import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroHorarioDataModel } from './model/cadastro-horario-data';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { finalize } from 'rxjs/operators';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { HorarioService } from '../../../services/horario.service';
import { HorarioModel } from '../../../model/horario.model';

@Component({
    templateUrl: './views/cadastro-horario.dialog.component.html',
    styleUrls: ['./views/cadastrar-horario.dialog.component.scss', '../../../../../../../shared/styles/toast.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CadastroHorarioDialogComponent implements OnInit {

    form: FormGroup;
    data: CadastroHorarioDataModel;
    turnos: TurnoModel[];
    carregandoTurnos = false;
    salvando = false;

    constructor(
        private dialogRef: MatDialogRef<CadastroHorarioDialogComponent>,
        private _formBuilder: FormBuilder,
        private _turnoService: TurnoService,
        private _horarioService: HorarioService,
        private _snackBarService: SnackBarService,
        @Inject(MAT_DIALOG_DATA) data: CadastroHorarioDataModel) {
        this.data = data;
    }

    get horario(): HorarioModel {
        return this.form.getRawValue() as HorarioModel;
    }

    get desabilitarBotaoSalvar(): boolean {
        return this.form.invalid || this.salvando;
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
        this.salvando = true;

        const acaoSalvar = (horario: HorarioModel) => {
            this.data.salvar(horario);
            this.fecharDialog();
        };

        if (this.data.horarioFiltrado.codigo)
            return this._editar(acaoSalvar);

        return this._inserir(acaoSalvar);
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    private _inserir(acao: (horario: HorarioModel) => void): void {
        this._horarioService.criar(this.horario)
            .pipe(finalize(() => {
                this.salvando = false;
            }))
            .subscribe(horarioSalvo => {
                acao(horarioSalvo);
                this._snackBarService.exibirSnackBarSucesso('Horário adicionado com sucesso!');
            });
    }

    private _editar(acao: (horario: HorarioModel) => void): void {
        this._horarioService.editar(this.horario)
            .pipe(finalize(() => {
                this.salvando = false;
            }))
            .subscribe(horarioSalvo => {
                acao(horarioSalvo);
                this._snackBarService.exibirSnackBarSucesso('Horário atualizado com sucesso!');
            });
    }

    private _iniciarValoresFiltrados(): void {
        this.form.patchValue(this.data.horarioFiltrado);
    }

    private _carregarTurnos(): void {
        this.carregandoTurnos = true;
        this._turnoService.listarTodos()
            .pipe(finalize(() => this.carregandoTurnos = false))
            .subscribe(turnos => {
                this.turnos = turnos;
                if (turnos.length > 0)
                    this.form.get('codigoTurno').setValue(turnos[0].codigo);
            });
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            codigoCurriculo: [null, [Validators.required]],
            ano: [new Date().getFullYear(), [Validators.required, Validators.minLength(4)]],
            periodo: [null, [Validators.required]],
            semestre: [null, [Validators.required]],
            codigoTurno: [null, [Validators.required]],
            mensagem: [null]
        });
    }

}
