import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { IDisciplinaCargoDialogData } from './contratos/disciplina-cargo-dialog-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoDisciplina } from '../../models/cargo-disciplina';
import { Curriculo } from 'app/main/gerenciamento/curriculo/model/curriculo.model';
import { CurriculoService } from 'app/main/gerenciamento/curriculo/services/curriculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICurriculoDisciplina } from 'app/main/gerenciamento/curriculo/model/curriculo-disciplina.model';
import { finalize } from 'rxjs/operators';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CargoService } from '../../services/cargo.service';

@Component({
    selector: 'app-disciplina-cargo-dialog',
    templateUrl: './view/disciplina-cargo-dialog.component.html',
    styleUrls: ['./view/disciplina-cargo-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DisciplinaCargoDialogComponent implements OnInit {

    private _data: IDisciplinaCargoDialogData;
    form: FormGroup;
    curriculos: Curriculo[];
    filtroDisciplinaCurriculo = '';
    disciplinasCurriculo: ICurriculoDisciplina[] = [];
    carregandoDisciplinasCurriculo = false;
    salvandoDisciplina = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) data: IDisciplinaCargoDialogData,
        private _formBuilder: FormBuilder,
        private _curriculoService: CurriculoService,
        private _cargoService: CargoService,
        private _snackBarService: SnackBarService
    ) {
        this._data = data;
    }

    ngOnInit(): void {
        this._construirFormulario();
        this.curriculos = this._data.curriculos;
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

    aoSelecionarCurriculo(curriculoSelecionado: Curriculo): void {
        this.carregandoDisciplinasCurriculo = true;
        this._curriculoService.listarDisciplinas(curriculoSelecionado.codigo)
            .pipe(finalize(() => this.carregandoDisciplinasCurriculo = false))
            .subscribe(disciplinas => this.disciplinasCurriculo = disciplinas);
    }

    salvar(): void {
        const disciplinaSelecionada = this.form.get('disciplinasCurriculo').value as ICurriculoDisciplina;
        const curriculoSelecionado = this.form.get('curriculo').value as Curriculo;

        const disciplinaCargo = {
            codigoCargo: this._data.codigoCargo,
            codigoCurriculoDisciplina: disciplinaSelecionada.codigo,
            disciplinaDescricao: disciplinaSelecionada.disciplina.descricao,
            cursoDescricao: curriculoSelecionado.descricaoCurso
        } as CargoDisciplina;

        this.salvandoDisciplina = true;

        this._cargoService.adicionarDisciplina(disciplinaCargo)
            .pipe(finalize(() => this.salvandoDisciplina = false))
            .subscribe(
                () => {
                    this._data.onClickSalvar(disciplinaCargo);
                    this._snackBarService.exibirSnackBarSucesso('Disciplina adicionada com sucesso');
                    this.form.get('disciplinasCurriculo').reset();
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
            disciplinasCurriculo: [null, Validators.required]
        });
    }
}
