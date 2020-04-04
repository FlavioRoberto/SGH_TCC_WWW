import { FormBuilder, Validators } from '@angular/forms';
import { Component, Injectable, Injector, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { EStatus, OnInitDataBar } from '@breaking_dev/ic-databar-lib';
import { ColumnDef, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';

import { anoRegex } from 'app/shared/regex/input-regex';

import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { ProfessorService } from '../professores/services/professor.service';
import { Professor } from '../professores/models/professor.model';
import { CurriculoDisciplinaModel } from '../../curriculo/model/curriculo-disciplina.model';
import { CargoService } from './services/cargo.service';
import { CargoPaginado } from './models/cargo-paginado';
import { Cargo } from './models/cargo.model';
import { CargoDataBarBindService } from './services/cargo.databar.service';
import { CargoExpansivelTableService } from './services/cargo.table.service';
import { DisciplinaCargoDialogService } from './components/disciplina-cargo-dialog/services/disciplina-cargo-dialog.service';

@Component({
    templateUrl: './view/cargo.component.html',
    styleUrls: ['./view/cargo.component.scss']
})
export class CargoComponent extends OnInitDataBar<Cargo> implements OnDestroy {

    semestres: ESemestre[];
    professores: Professor[] = [];
    professorFiltro = '';
    carregandoProfessores = false;
    disciplinas: CurriculoDisciplinaModel[];
    colunasExpansivelTable: ColumnDef[];
    acoesExpansivelTable: AcoesExpansivelTable[];

    constructor(
        private _formBuilder: FormBuilder,
        private _servicoProfessor: ProfessorService,
        private _servico: CargoService,
        private _disciplinaCargoDialogService: DisciplinaCargoDialogService,
        public servicoExpansivelTable: CargoExpansivelTableService,
        private _changeDetector: ChangeDetectorRef,
        private _injector: Injector) {
        super();
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
        this._limparDadosDatatable();
    }

    onInit(): void {
        this.construirFormulario();
        this.entidadePaginada = new CargoPaginado();
        this.servicoDataBarBind = new CargoDataBarBindService(this._injector, this.form);
        this._carregarProfessoresAtivos();
        this.colunasExpansivelTable = this.servicoExpansivelTable.colunas;
        this.acoesExpansivelTable = this.servicoExpansivelTable.acoes;
        this.semestres = this._servico.listarSemestres();
        this._changeDetector.detectChanges();
        this._limparDadosDatatable();
    }

    ngOnDestroy(): void {
        this._limparDadosDatatable();
    }

    get inserindoOuEditando(): boolean {
        return this.statusDataBar === EStatus.inserindo || this.statusDataBar === EStatus.editando;
    }

    get desabilitarBotaoAcaoDatatable(): boolean {
        return !(this.statusDataBar === EStatus.editando || this.statusDataBar === EStatus.dadosCarregados) ||
            !this.form.get('codigo').value;
    }

    get existeDisciplinaCargoSelecionado(): boolean {
        if (this.servicoExpansivelTable == null) {
            return false;
        }

        return this.servicoExpansivelTable.dataSource.data.length > 0;
    }


    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            numero: [null, [Validators.required]],
            edital: [null, [Validators.required]],
            ano: [null, [Validators.required, Validators.pattern(anoRegex)]],
            semestre: [null, [Validators.required]],
            professor: [null]
        });
    }

    filtrarProfessores(filtro: string): void {
        this.professorFiltro = filtro;
    }

    abrirDialogAdicionarDisciplina(): void {
        this._disciplinaCargoDialogService.abrirDialog(
            this.form.get('codigo').value,
            disciplinaAdicionada => {
                this.servicoExpansivelTable.dataSource.add(disciplinaAdicionada);
            });
    }

    private _carregarProfessoresAtivos(): void {
        this.carregandoProfessores = true;
        this._servicoProfessor.listarAtivos().subscribe(dados => {
            this.professores = dados;
            this.carregandoProfessores = false;
        },
            () => this.carregandoProfessores = false);
    }

    private _limparDadosDatatable(): void {
        if (this.statusDataBar !== EStatus.dadosCarregados && this.statusDataBar !== EStatus.editando && this.statusDataBar !== EStatus.removendo) {
            this.servicoExpansivelTable.dataSource.clear();
        }
    }
}

