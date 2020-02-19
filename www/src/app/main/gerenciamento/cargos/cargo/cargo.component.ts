import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { EStatus, OnInitDataBar } from '@breaking_dev/ic-databar-lib';
import { ColumnDef, IExpansivelTableServico, AcoesExpansivelTable } from '@breaking_dev/ic-expansivel-table';

import { anoRegex } from '@compartilhado/util/input-regex/input-regex';

import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { ProfessorService } from '../professores/services/professor.service';
import { Professor } from '../professores/models/professor.model';
import { ICurriculo } from '../../curriculo/model/curriculo.model';
import { ICurriculoDisciplina } from '../../curriculo/model/curriculo-disciplina.model';
import { CargoService } from './services/cargo.service';
import { CargoPaginado } from './models/cargo-paginado';
import { Cargo } from './models/cargo.model';
import { CargoDataBarBindService } from './services/cargo.databar.service';
import { CargoExpansivelTableService } from './services/cargo.table.service';

@Component({
    templateUrl: './view/cargo.component.html',
    styleUrls: ['./view/cargo.component.scss']
})
export class CargoComponent extends OnInitDataBar<Cargo> {

    semestres = ESemestre;
    professores: Professor[] = [];
    professorFiltro = '';
    carregandoProfessores = false;
    curriculos: ICurriculo[];
    disciplinas: ICurriculoDisciplina[];
    colunasExpansivelTable: ColumnDef[];
    acoesExpansivelTable: AcoesExpansivelTable[];

    constructor(
        private _formBuilder: FormBuilder,
        private _servicoProfessor: ProfessorService,
        private _servico: CargoService,
        public expansivelTableServico: CargoExpansivelTableService) {
        super();
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

    onInit(): void {
        this.construirFormulario();
        this.entidadePaginada = new CargoPaginado();
        this.servicoDataBarBind = new CargoDataBarBindService(this._servico, this.form);
        this._carregarProfessoresAtivos();

        this.colunasExpansivelTable = [
            { def: 'cursoDescricao', titulo: 'Curso', value: null },
            { def: 'disciplinaDescricao', titulo: 'Disciplina', value: null }
        ];

        this.acoesExpansivelTable = [
            {
                descricao: 'Remover',
                cor: 'primary',
                executaMetodo: () => { alert('teste'); },
                icone: 'delete',
                toolTip: 'Remover disciplina',
                expandir: false
            }
        ];
    }

    get condicaoDataBar(): boolean {
        return this.statusDataBar === EStatus.inserindo || this.statusDataBar === EStatus.editando;
    }

    construirFormulario(): void {
        this.form = this._formBuilder.group({
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

    }

    private _carregarProfessoresAtivos(): void {
        this.carregandoProfessores = true;
        this._servicoProfessor.listarAtivos().subscribe(dados => {
            this.professores = dados;
            this.carregandoProfessores = false;
        },
            () => this.carregandoProfessores = false);
    }
}

