import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';

import { locale as portugues } from './../i18n/pt-br';

import { CurriculoPaginado } from './model/curriculo.paginacao';
import { CursoModel } from '../curso/model/curso.model';
import { TurnoModel } from '../turno/model/turno.interface';
import { CurriculoDisciplinaModel } from './model/curriculo-disciplina.model';
import { CurriculoModule } from './curriculo.module';
import { CurriculoDataBarService } from './services/curriculo-databar.service';
import { AdicionarDisciplinaDialogService } from './components/dialogs/adicionar-disciplina/service/adicionar-disciplina-dialog.service';

import { CurriculoService } from './services/curriculo.service';
import { anoRegex } from 'app/shared/regex/input-regex';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { finalize } from 'rxjs/operators';
import { ConfirmaDialogService } from 'app/shared/components/dialogs/confirma-dialog/service/confirma-dialog.service';
import { TipoModel } from '../disciplinas/tipo/model/iTipo';
import { Filtro } from '../../../shared/components/filter/filtro';

@Component({
    selector: 'curriculo',
    templateUrl: './view/curriculo.component.html',
    styleUrls: ['./view/curriculo.component.scss']
})
export class CurriculoComponent implements IDataBarBindComponent<CurriculoModule> {
    statusDataBar: EStatus;
    servicoDataBarBind: CurriculoDataBarService;
    form: FormGroup;
    entidadePaginada: CurriculoPaginado;
    cursos: CursoModel[] = [];
    turnos: TurnoModel[] = [];
    EStatus = EStatus;
    isMobile = false;
    removendoDisciplina = false;
    parametroFiltroCurso: Filtro<any>;
    private tiposDisciplinas: TipoModel[];

    displayedColumns: ColumnDef[] = [
        new ColumnDef('Disciplina', 'disciplina', 'descricao'),
        new ColumnDef('Período', 'periodo'),
        new ColumnDef('Quant. Teórica', 'aulasSemanaisTeorica'),
        new ColumnDef('Quant. Prática', 'aulasSemanaisPratica')
    ];

    displayedExpansivelColumns = [
        { titulo: 'Quantidade de aula total', def: 'quantidadeAulaTotal' },
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

    dataSource: ApExpansivelTableDataSource<CurriculoDisciplinaModel>;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _dialog: AdicionarDisciplinaDialogService,
        private _snackBar: SnackBarService,
        private _servicoConfirmaDialog: ConfirmaDialogService,
        private _platform: Platform,
        private _servico: CurriculoService,
    ) {
        this.dataSource = new ApExpansivelTableDataSource<CurriculoDisciplinaModel>();
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.entidadePaginada = new CurriculoPaginado();

        this.cursos = this._route.snapshot.data['cursos'];

        this.turnos = this._route.snapshot.data['turnos'];

        this._construirForm();

        this.servicoDataBarBind = new CurriculoDataBarService(this.form, this._servico, this.dataSource);

        this.tiposDisciplinas = this._route.snapshot.data['tipos'];

        if (this._platform.ANDROID || this._platform.IOS) {
            this.isMobile = true;
        }

    }

    private _removerDisicplina(itemRemover: CurriculoDisciplinaModel, index): void {
        this._servicoConfirmaDialog.emProgresso = false;
        this._servicoConfirmaDialog.mensagemCarregando = 'Removendo disciplina...';
        this._servicoConfirmaDialog.acaoCancelar = () => this._servicoConfirmaDialog.fecharDialog();
        this._servicoConfirmaDialog.acaoOk = () => {
            this._servicoConfirmaDialog.emProgresso = true;
            this.removendoDisciplina = true;
            this._servico.removerDisciplina(itemRemover.codigo)
                .pipe(finalize(() => {
                    this._servicoConfirmaDialog.fecharDialog();
                    this.removendoDisciplina = false;
                }))
                .subscribe(() => {
                    this.dataSource.removeByIndex(index);
                    this._snackBar.exibirSnackBarSucesso('Disciplina removida com sucesso.');
                });
        };

        this._servicoConfirmaDialog
            .abrirDialog('Atencão', `Deseja remover a disciplina ${itemRemover.disciplina.descricao}`);

    }

    private _editarDisciplina(itemEditar: CurriculoDisciplinaModel, index): void {
        const disciplina = {
            codigo: itemEditar.codigo,
            codigoTipo: itemEditar.codigoTipo,
            disciplina: itemEditar.disciplina.codigo,
            aulasSemanaisPratica: itemEditar.aulasSemanaisPratica,
            aulasSemanaisTeorica: itemEditar.aulasSemanaisTeorica,
            quantidadeAulaTotal: itemEditar.quantidadeAulaTotal,
            periodo: itemEditar.periodo,
            preRequisitos: itemEditar.preRequisitos?.map(i => i.codigoDisciplina)
        };

        this.abrirDialogAdicionarDisciplina(disciplina, index);
    }

    abrirDialogAdicionarDisciplina(disciplina = null, index = null): void {
        this._dialog.abrirDialog(
            this.form.get('codigo').value,
            'Adicionar disciplina',
            this.tiposDisciplinas,
            (dados, form: FormGroup) => {
                if (disciplina && index >= 0) {
                    this.dataSource.removeByIndex(index);
                    this.servicoDataBarBind.constroiPreRequisitosDescricao(dados);
                    this.dataSource.add(dados);
                    this._snackBar.exibirSnackBarSucesso('Disciplina atualizada.');
                }
                else {
                    this.servicoDataBarBind.constroiPreRequisitosDescricao(dados);
                    this.dataSource.add(dados);
                    this._snackBar.exibirSnackBarSucesso('Disciplina adicionada.');
                    form.reset();
                }

            }, disciplina);
    }

    statusChanged(status: EStatus): void {
        this.statusDataBar = status;
        if (this.statusDataBar === EStatus.novaPesquisa ||
            this.statusDataBar === EStatus.inserindo ||
            this.statusDataBar === EStatus.pesquisando) {
            this.dataSource.clear();
        }
    }

    private _construirForm(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            ano: [null, [Validators.required, Validators.pattern(anoRegex)]],
            codigoCurso: [null, [Validators.required]],
            disciplinas: [null]
        });

        this.parametroFiltroCurso = new Filtro({
            textoExibicao: (curso: CursoModel) => curso.descricao,
            atributoValue: 'codigo',
            control: this.form.get('codigoCurso') as FormControl,
            dados: this.cursos,
            label: 'Curso',
            carregando: false,
            mensgemNaoEncontrado: 'Curso não encontrado',
            mensagemCarregamento: ''
        })
    }

}
