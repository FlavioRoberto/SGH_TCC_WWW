import { Component, OnInit, ViewEncapsulation, Inject, OnChanges } from '@angular/core';
import { DisciplinaCargoDialogData } from './contratos/disciplina-cargo-dialog-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoDisciplina } from '../../models/cargo-disciplina';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CargoService } from '../../services/cargo.service';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoDisciplinaModel } from 'app/main/cadastros/curriculo/model/curriculo-disciplina.model';
import { CurriculoService } from 'app/main/cadastros/curriculo/services/curriculo.service';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';

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
        this.form.valueChanges.subscribe(dados => this._desabilitarInputDescricao());
        this._carregarTurnos();
        this._carregarCurriculo();
    }

    get descricaoLabelDisciplinasCurriculo(): string {
        if (this.carregandoDisciplinasCurriculo) {
            return 'Carregando disciplinas do currículo...';
        }

        if (!this.form.get('curriculo').value) {
            return 'Selecione um currículo para carregar as disciplinas.';
        }

        return this.disciplinasCurriculo.length > 0 ? 'Disciplinas' : 'Não foi encontrado nenhuma disciplina.';
    }

    aoSelecionarCurriculo(curriculoSelecionado: CurriculoModel): void {
        this.carregandoDisciplinasCurriculo = true;
        this._curriculoService.listarDisciplinas(curriculoSelecionado.codigo)
            .pipe(finalize(() => this.carregandoDisciplinasCurriculo = false))
            .subscribe(disciplinas => this.disciplinasCurriculo = disciplinas);
    }

    salvar(): void {
        const disciplinaSelecionada = this.form.get('disciplinasCurriculo').value as CurriculoDisciplinaModel;
        const curriculoSelecionado = this.form.get('curriculo').value as CurriculoModel;
        const turno = this.form.get('turno').value as TurnoModel;
        const descricao = this.form.get('descricao').value;

        const disciplinaCargo = {
            codigoCargo: this._data.codigoCargo,
            codigoCurriculoDisciplina: disciplinaSelecionada.codigo,
            descricao: descricao ?? disciplinaSelecionada.disciplina.descricao,
            cursoDescricao: curriculoSelecionado.descricaoCurso,
            codigoTurno: turno.codigo,
        } as CargoDisciplina;

        this.salvandoDisciplina = true;

        this._cargoService.adicionarDisciplina(disciplinaCargo)
            .pipe(finalize(() => this.salvandoDisciplina = false))
            .subscribe(
                disciplina => {
                    disciplinaCargo.cursoDescricao = `${disciplinaCargo.cursoDescricao} - ${curriculoSelecionado.ano}`;
                    disciplinaCargo.turnoDescricao = turno.descricao;
                    disciplinaCargo.codigo = disciplina.codigo;
                    this._data.onClickSalvar(disciplinaCargo);
                    this._snackBarService.exibirSnackBarSucesso('Disciplina adicionada com sucesso');
                    this.form.get('disciplinasCurriculo').reset();
                    this.form.get('turno').reset();
                    this.form.get('descrição').reset();
                }
            );
    }

    fecharDialog(): void {
        return this._data.onClickFechar();
    }

    filtrarDisciplinasCurriculo(filtro: string): void {
        this.filtroDisciplinaCurriculo = filtro;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            curriculo: [null, Validators.required],
            disciplinasCurriculo: [null, Validators.required],
            turno: [null, Validators.required],
            descricao: [{ value: null, disabled: true }, [Validators.maxLength(30)]]
        });
    }

    private _desabilitarInputDescricao(): void {
        const formDescricao = this.form.get('descricao');
        const disciplinaSelecionada = this.form.get('disciplinasCurriculo').value;

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

}
