import { Component, OnInit, ViewEncapsulation, Inject, OnChanges } from '@angular/core';
import { DisciplinaCargoDialogData } from './contratos/disciplina-cargo-dialog-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CargoService } from '../../services/cargo.service';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoDisciplinaModel } from 'app/main/cadastros/curriculo/model/curriculo-disciplina.model';
import { CurriculoService } from 'app/main/cadastros/curriculo/services/curriculo.service';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { Observable } from 'rxjs';
import { CargoDisciplinaModel } from '../../models/cargo-disciplina.model';

@Component({
    selector: 'app-disciplina-cargo-dialog',
    templateUrl: './view/disciplina-cargo-dialog.component.html',
    styleUrls: ['./view/disciplina-cargo-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DisciplinaCargoDialogComponent implements OnInit {

    private _data: DisciplinaCargoDialogData;
    form: FormGroup;
    curriculos: CurriculoModel[];
    turnos: TurnoModel[];
    filtroDisciplinaCurriculo = '';
    disciplinasCurriculo: CurriculoDisciplinaModel[] = [];
    carregandoDisciplinasCurriculo = false;
    salvandoDisciplina = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) data: DisciplinaCargoDialogData,
        private _formBuilder: FormBuilder,
        private _curriculoService: CurriculoService,
        private _cargoService: CargoService,
        private _snackBarService: SnackBarService,
        private _turnoService: TurnoService
    ) {
        this._data = data;
    }

    ngOnInit(): void {
        this._construirFormulario();
        this.form.valueChanges.subscribe(() => this._desabilitarInputDescricao());
        this._carregarTurnos();
        this._carregarCurriculo();
        this._carregarDisciplinaFormulario();
    }

    get descricaoLabelDisciplinasCurriculo(): string {
        if (this.carregandoDisciplinasCurriculo) {
            return 'Carregando disciplinas do currículo...';
        }

        if (!this.form.get('codigoCurriculo').value) {
            return 'Selecione um currículo para carregar as disciplinas.';
        }

        return this.disciplinasCurriculo.length > 0 ? 'Disciplinas' : 'Não foi encontrado nenhuma disciplina.';
    }

    aoSelecionarCurriculo(curriculoSelecionado: CurriculoModel): void {
        this.carregandoDisciplinasCurriculo = true;
        this.form.get('codigoCurriculoDisciplina').setValue(null);
        this._carregarDisciplinasCurriculo(curriculoSelecionado.codigo);
    }

    salvar(): void {
        const disciplinaCargo = this.form.getRawValue() as CargoDisciplinaModel;

        disciplinaCargo.codigoCargo = this._data.codigoCargo;

        this.salvandoDisciplina = true;

        let requisicao: Observable<CargoDisciplinaModel> = null;

        if (this._data.disciplina == null)
            requisicao = this._criar(disciplinaCargo);
        else
            requisicao = this._editar(disciplinaCargo);

        requisicao.pipe(finalize(() => this.salvandoDisciplina = false))
            .subscribe(() => this._limparFormularioAposSalvar());
    }

    fecharDialog(): void {
        return this._data.onClickFechar();
    }

    filtrarDisciplinasCurriculo(filtro: string): void {
        this.filtroDisciplinaCurriculo = filtro;
    }

    private _carregarDisciplinasCurriculo(codigoCurriculo: number): void {
        this._curriculoService.listarDisciplinas(codigoCurriculo)
            .pipe(finalize(() => this.carregandoDisciplinasCurriculo = false))
            .subscribe(disciplinas => {
                this.disciplinasCurriculo = disciplinas;
            });
    }

    private _editar(disciplinaCargo: CargoDisciplinaModel): Observable<CargoDisciplinaModel> {
        return this._cargoService.editarDisciplina(disciplinaCargo);
    }

    private _criar(disciplinaCargo: CargoDisciplinaModel): Observable<CargoDisciplinaModel> {
        return this._cargoService.adicionarDisciplina(disciplinaCargo);
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            codigoCurriculo: [null, Validators.required],
            codigoCurriculoDisciplina: [null, Validators.required],
            codigoTurno: [null, Validators.required],
            descricao: [{ value: null, disabled: true }, [Validators.maxLength(30)]]
        });
    }

    private _limparFormularioAposSalvar(): void {
        this._data.onClickSalvar();
        this._snackBarService.exibirSnackBarSucesso('Disciplina adicionada com sucesso');
        this.form.get('codigoCurriculoDisciplina').reset();
        this.form.get('codigoTurno').reset();
        this.form.get('descricao').reset();
    }

    private _desabilitarInputDescricao(): void {
        const formDescricao = this.form.get('descricao');
        const disciplinaSelecionada = this.form.get('codigoCurriculoDisciplina').value;

        if (disciplinaSelecionada)
            formDescricao.enable({ emitEvent: false });
        else
            formDescricao.disable({ emitEvent: false });
    }

    private _carregarTurnos(): void {
        this._turnoService.listarTodos()
            .subscribe(dados => this.turnos = dados);
    }

    private _carregarCurriculo(): void {
        this._curriculoService.listarTodos()
            .subscribe(dados => this.curriculos = dados);
    }

    private _carregarDisciplinaFormulario(): void {
        const disciplina = this._data.disciplina;
        if (disciplina != null) {
            this.form.patchValue(disciplina);
            this._carregarDisciplinasCurriculo(disciplina.codigoCurriculo);
        }
    }
}
