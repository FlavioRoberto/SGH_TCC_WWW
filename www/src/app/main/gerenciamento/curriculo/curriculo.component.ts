import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSnackBar } from '@angular/material';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/idatabar-bind';

import { locale as portugues } from './../i18n/pt-br';

import { CurriculoPaginado } from './model/curriculo.paginacao';
import { ICurso } from '../curso/model/curso.model';
import { ITurno } from '../turno/model/turno.interface';
import { ICurriculoDisciplina } from './model/curriculo-disciplina.model';
import { CurriculoModule } from './curriculo.module';
import { CurriculoDataBarService } from './services/curriculo-databar.service';
import { AdicionarDisciplinaDialogService } from './components/dialogs/adicionar-disciplina/service/adicionar-disciplina-dialog.service';

import { CurriculoService } from './services/curriculo.service';
import { anoRegex } from '@compartilhado/util/input-regex/input-regex';

@Component({
    selector: 'curriculo',
    templateUrl: './view/curriculo.component.html',
    styleUrls: ['./view/curriculo.component.scss']
})
export class CurriculoComponent implements IDataBarBindComponent<CurriculoModule> {
    servicoDataBarBind: CurriculoDataBarService;
    form: FormGroup;
    entidadePaginada: CurriculoPaginado;
    statusNavBar: string;
    cursos: ICurso[] = [];
    turnos: ITurno[] = [];
    EStatus = EStatus;
    isMobile = false;

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
        executar: (item: any, index): void => {
            this._editarDisciplina(item, index);
        }
    }, {
        descricao: 'Remover',
        icone: 'delete',
        executar: (item: any, index): void => {
            this._removerDisicplina(item, index);
        }
    }];

    dataSource: ApExpansivelTableDataSource<ICurriculoDisciplina>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _dialog: AdicionarDisciplinaDialogService,
        private _snackBar: MatSnackBar,
        private _platform: Platform,
        private _servico: CurriculoService
    ) {
        this.dataSource = new ApExpansivelTableDataSource<ICurriculoDisciplina>();
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.entidadePaginada = new CurriculoPaginado();
        this._construirForm();

        this.servicoDataBarBind = new CurriculoDataBarService(this.form, this._servico, this.dataSource);

        this.cursos = this._route.snapshot.data['cursos'];

        this.turnos = this._route.snapshot.data['turnos'];

        if (this._platform.ANDROID || this._platform.IOS) {
            this.isMobile = true;
        }

    }

    private _removerDisicplina(itemRemover, index): void {
        this.dataSource.removeByIndex(index);
    }

    private _editarDisciplina(itemEditar: ICurriculoDisciplina, index): void {
        const disciplina = {
            disciplina: itemEditar.disciplina.codigo,
            aulasSemanaisPratica: itemEditar.aulasSemanaisPratica,
            aulasSemanaisTeorica: itemEditar.aulasSemanaisTeorica,
            credito: itemEditar.credito,
            periodo: itemEditar.periodo,
            preRequisitos: itemEditar.preRequisitos.map(i => i.codigo)
        };

        this.abrirDialogAdicionarDisciplina(disciplina, index);
    }

    abrirDialogAdicionarDisciplina(disciplina = null, index = null): void {
        this._dialog.openDialog('Adicionar disciplina', (dados, form: FormGroup) => {
            const disciplinaAdicionada = this.dataSource.data.filter(item => {
                return item.codigoDisciplina == dados.codigoDisciplina;
            });

            if (disciplinaAdicionada.length > 0 && index == null) {
                this.exibirSnackBar('Disciplina já adicionada.', true);
                return;
            }

            if (disciplina && index >= 0) {
                this._removerDisicplina(dados, index);
                this.constroiPreRequisitos(dados);
                this.dataSource.add(dados);
                this.exibirSnackBar('Disciplina atualizada.', false, true);
            }
            else {
                this.constroiPreRequisitos(dados);
                this.dataSource.add(dados);
                this.exibirSnackBar('Disciplina adicionada.', false, true);
                form.reset();
            }
            console.log(dados);

        }, disciplina);
    }

    statusChanged(status: string): void {
        this.statusNavBar = status;
    }

    private constroiPreRequisitos(dados: ICurriculoDisciplina): void {
        dados.preRequisitoDescricao = '';
        if (dados.preRequisitos && dados.preRequisitos.length > 0) {
            dados.preRequisitos.forEach((disciplinaPreRequsito, i) => {
                let separador = ' - ';
                if (i == 0) {
                    separador = '';
                }
                dados.preRequisitoDescricao += separador + disciplinaPreRequsito.descricao;
            });
        }
    }

    private exibirSnackBar(mensagem: string, erro: boolean = false, info: boolean = false): void {
        let classe = 'sucesso';
        if (erro) {
            classe = 'erro';
        }

        if (info) {
            classe = 'info';
        }

        this._snackBar.open(mensagem, 'OK', {
            panelClass: classe,
            duration: 3500,
            horizontalPosition: 'center'
        });
    }

    private _construirForm(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            ano: [null, [Validators.required, Validators.pattern(anoRegex)]],
            codigoCurso: [null, [Validators.required]],
            disciplinas: [null]
        });
    }

}
