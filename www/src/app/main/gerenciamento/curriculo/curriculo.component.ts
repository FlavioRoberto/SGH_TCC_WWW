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
import { ApExpansivelTableDataSource, IColumnDef } from '@compartilhado/layout/expansivel-table/expansivel-table.component';
import { IDisciplinaCurriculo } from './components/dialogs/adicionar-disciplina/models/IDisciplinaCurriculo';

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
    disciplinasVinculadas: ICurriculoDisciplina[] = [];
    EStatus = EStatus;
    isMobile = false;

    displayedColumns: IColumnDef[] = [
        { titulo: 'Disciplina', def: 'nomeDisciplina' },
        { titulo: 'Hora total (h/a)', def: 'horaAulaTotal' },
        { titulo: 'Hora total (h)', def: 'horaTotal' },
        { titulo: 'Crédito', def: 'credito' },
        { titulo: 'Ação', def: 'acao' }
    ];

    displayedExpansivelColumns = [
        { titulo: 'Carga horária semanal teórica', def: 'cargaHorariaSemanalTeorica' },
        { titulo: 'Carga horária semanal prática', def: 'cargaHorariaSemanalPratica' },
    ];

    dataSource: ApExpansivelTableDataSource<ICurriculoDisciplina>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _dialog: AdicionarDisciplinaDialogService,
        private _snackBar: MatSnackBar,
        private _platform: Platform
    ) {
        this.disciplinasVinculadas = [];
        this.dataSource = new ApExpansivelTableDataSource(this.disciplinasVinculadas);
        this.disciplinasVinculadas.push({
            nomeDisciplina: 'teste',
            cargaHorariaSemanalTeorica: 70,
            horaAulaTotal: 42,
            horaTotal: 40,
            credito: 100,
            cargaHorariaSemanalPratica: 74
        } as ICurriculoDisciplina,
            {
                nomeDisciplina: 'teste 2',
                cargaHorariaSemanalTeorica: 74,
                horaAulaTotal: 38,
                horaTotal: 44,
                credito: 100,
                cargaHorariaSemanalPratica: 80
            } as ICurriculoDisciplina);
    }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.entidadePaginada = new CurriculoPaginado();
        this.form = this._formBuilder.group({
            codigo: [null],
            periodo: [null, [Validators.required]],
            ano: [null, [Validators.required, Validators.pattern(/^\d{4}$/)]],
            codigoCurso: [null, [Validators.required]],
            codigoTurno: [null, [Validators.required]]
        });

        this.servicoDataBarBind = new CurriculoDataBarService(this.form);

        this._carregarPeriodos();

        this.cursos = this._route.snapshot.data['cursos'];

        this.turnos = this._route.snapshot.data['turnos'];

        if (this._platform.ANDROID || this._platform.IOS) {
            this.isMobile = true;
        }

    }


    abrirDialogAdicionarDisciplina(e: Event): void {
        e.preventDefault();
        this._dialog.openDialog('Adicionar disciplina', (dados) => {
            this.disciplinasVinculadas.push(dados);
            this.exibirSnackBar('Disciplina adicionada.');
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

    statusChanged(status: string): void {
        this.statusNavBar = status
    }

}
