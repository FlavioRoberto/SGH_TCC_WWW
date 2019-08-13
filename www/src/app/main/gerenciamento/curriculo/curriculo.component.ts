import { Component, ViewChild } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurriculoPaginado } from './model/curriculo.paginacao';
import { ICurso } from '../curso/model/curso.model';
import { ITurno } from '../turno/model/turno.interface';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { ICurriculoDisciplina } from './model/curriculo-disciplina.model';
import { CurriculoModule } from './curriculo.module';
import { CurriculoDataBarService } from './services/curriculo-databar.service';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/IDataBarBind';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { ActivatedRoute } from '@angular/router';
import { AdicionarDisciplinaDialogService } from './components/dialogs/adicionar-disciplina/service/adicionar-disciplina-dialog.service';
import { Platform } from '@angular/cdk/platform';
import { ColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { ApExpansivelTableDataSource } from '@compartilhado/layout/expansivel-table/ApExpansivelTableDataSource';
import { IDisciplina } from '../disciplina/cadastro/model/IDisciplina';
import { CurriculoService } from './services/curriculo.service';
import { ICurriculo } from './model/curriculo.model';

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
    periodos: any[];
    cursos: ICurso[] = [];
    turnos: ITurno[] = [];
    EStatus = EStatus;
    isMobile = false;

    displayedColumns: ColumnDef[] = [
        new ColumnDef('Disciplina', 'disciplina', 'descricao'),
        new ColumnDef('Hora total (h/a)', 'horaAulaTotal'),
        new ColumnDef('Hora total (h)', 'horaTotal'),
        new ColumnDef('Crédito', 'credito')
    ];

    displayedExpansivelColumns = [
        { titulo: 'Carga horária semanal teórica', def: 'cargaHorariaSemanalTeorica' },
        { titulo: 'Carga horária semanal prática', def: 'cargaHorariaSemanalPratica' },
        { titulo: 'Pré-requisito', def: 'preRequisito' },
    ];

    acoesTabela = [{
        descricao: 'Editar',
        icone: 'edit',
        executar: (item: any): void => {
            alert('Inserindo: ' + JSON.stringify(item));
        }
    }, {
        descricao: 'Remover',
        icone: 'delete',
        executar: (item: any): void => {
            this._removerDisicplina(item);
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
        this.dataSource.data.push(
            {
                disciplina: { descricao: 'teste' },
                cargaHorariaSemanalTeorica: 74,
                horaAulaTotal: 38,
                horaTotal: 44,
                credito: 100,
                cargaHorariaSemanalPratica: 80
            } as ICurriculoDisciplina);

        this.servicoDataBarBind = new CurriculoDataBarService(this.form, this._servico, this.dataSource);

        this._carregarPeriodos();

        this.cursos = this._route.snapshot.data['cursos'];

        this.turnos = this._route.snapshot.data['turnos'];

        if (this._platform.ANDROID || this._platform.IOS) {
            this.isMobile = true;
        }

    }

    private _removerDisicplina(itemRemover): void {
        this.dataSource.data = this.dataSource
            .data
            .filter(item => item.disciplina.descricao != itemRemover.disciplina.descricao);
    }

    abrirDialogAdicionarDisciplina(e: Event): void {
        e.preventDefault();
        this._dialog.openDialog('Adicionar disciplina', (dados) => {
            this.constroiPreRequisitos(dados);
            this.dataSource.add(dados);
            console.log(dados);
            this.exibirSnackBar('Disciplina adicionada.');
        });
    }

    statusChanged(status: string): void {
        this.statusNavBar = status
    }

    private constroiPreRequisitos(dados: ICurriculoDisciplina): void {
        dados.preRequisito = '';
        dados.disciplinasPreRequisito.forEach((disciplina, i) => {
            let separador = '-';
            if (i == 0) {
                separador = '';
            }
            dados.preRequisito += separador + disciplina.disciplina.descricao;
        });
    }

    private exibirSnackBar(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'sucesso',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }

    private _carregarPeriodos(): void {
        this.periodos = [
            { codigo: 1, descricao: 'Primeiro' },
            { codigo: 2, descricao: 'Segundo' },
            { codigo: 3, descricao: 'Terceiro' },
            { codigo: 4, descricao: 'Quarto' },
            { codigo: 5, descricao: 'Quinto' },
            { codigo: 6, descricao: 'Sexto' },
            { codigo: 7, descricao: 'Sétimo' },
            { codigo: 8, descricao: 'Oitavo' },
            { codigo: 9, descricao: 'Nono' },
            { codigo: 10, descricao: 'Décimo' }
        ]
    }

    private _construirForm(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            periodo: [null, [Validators.required]],
            ano: [null, [Validators.required, Validators.pattern(/^\d{4}$/)]],
            codigoCurso: [null, [Validators.required]],
            codigoTurno: [null, [Validators.required]],
            disciplinas: [null]
        });
    }

    // private _construirFormGroupDisciplinas(): FormGroup {
    //     return this._formBuilder.group({
    //         codigo: [null],
    //         disciplina: [null],
    //         codigoCurriculo: [null],
    //         cargaHorariaSemanalTeorica: [null],
    //         cargaHorariaSemanalPratica: [null],
    //         cargaHorariaSemanalTotal: [null],
    //         horaAulaTotal: [null],
    //         horaTotal: [null],
    //         credito: [null],
    //         disciplinasPreRequisito: [null]
    //     });

    // }

}
