import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { EStatus, OnInitDataBar } from '@breaking_dev/ic-databar-lib';
import { anoRegex } from '@compartilhado/util/input-regex/input-regex';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';

import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { ProfessorService } from '../professores/services/professor.service';
import { Professor } from '../professores/models/professor.model';
import { CargoDisciplina } from './models/cargo-disciplina';
import { CurriculoService } from '../../curriculo/services/curriculo.service';
import { ICurriculo } from '../../curriculo/model/curriculo.model';
import { ICurriculoDisciplina } from '../../curriculo/model/curriculo-disciplina.model';
import { CargoService } from './services/cargo.service';
import { CargoPaginado } from './models/cargo-paginado';
import { Cargo } from './models/cargo.model';
import { CargoDataBarBindService } from './services/cargo.databar.service';

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

    //#region datatable
    dataSource: ApExpansivelTableDataSource<CargoDisciplina>;

    displayedColumns: ColumnDef[] = [
        new ColumnDef('Disciplina', 'disciplina', 'descricao'),
        new ColumnDef('Período', 'periodo'),
        new ColumnDef('Crédito', 'credito')
    ];

    displayedExpansivelColumns = [
        { titulo: 'Aulas semanais teóricas', def: 'aulasSemanaisTeorica' },
        { titulo: 'Aulas semanais práticas', def: 'aulasSemanaisPratica' },
        { titulo: 'Pré-requisito', def: 'preRequisitoDescricao' },
    ];

    acoesTabela = [{
        descricao: 'Editar',
        icone: 'edit',
        executar: (): void => {
            //this._editarDisciplina(item, index);
        }
    }, {
        descricao: 'Remover',
        icone: 'delete',
        executar: (): void => {
            //this._removerDisicplina(item, index);
        }
    }];
    //#endregion datatable

    constructor(
        private _formBuilder: FormBuilder,
        private _servicoProfessor: ProfessorService,
        private _servicoCurriculo: CurriculoService,
        private _servico: CargoService) {
        super();
    }

    onStatusChanged(status: EStatus): void {
        this.statusDataBar = status;
    }

    onInit(): void {
        this.construirFormulario();
        this.entidadePaginada = new CargoPaginado();
        this.servicoDataBarBind = new CargoDataBarBindService(this._servico, this.form);
        this.dataSource = new ApExpansivelTableDataSource<CargoDisciplina>();
        this._carregarProfessoresAtivos();
        this._carregarCurriculos();
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

    private _carregarCurriculos(): void {
        this._servicoCurriculo.listarTodos()
            .subscribe(dados => this.curriculos = dados);
    }

    private _carregarProfessoresAtivos(): void {
        this.carregandoProfessores = true;
        this._servicoProfessor.listarAtivos().subscribe(dados => {
            this.professores = dados;
            this.carregandoProfessores = false;
        },
            () => this.carregandoProfessores = false);
    }

    onSelectCurriculo(curriculo: ICurriculo): void {
        this._servicoCurriculo.listarDisciplinas(curriculo.codigo).subscribe(dados => this.disciplinas = dados);
    }

}

