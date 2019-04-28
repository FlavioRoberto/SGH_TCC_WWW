import { Component, ViewChild } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';
import { IDataBarBind } from 'app/layout/components/app_components/databar/contrato/IDataBarBind';
import { ICurriculo } from './model/curriculo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDataEntidadePaginada } from 'app/layout/components/app_components/databar/contrato/IDataEntidadePaginada';
import { CurriculoPaginado } from './model/curriculo.paginacao';
import { ICurso } from '../curso/model/curso.model';
import { ITurno } from '../turno/model/turno.interface';
import { CursoService } from '../curso/service/curso.service';
import { TurnoService } from '../turno/service/turno.service';
import { IDisciplina } from '../disciplina/cadastro/model/IDisciplina';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ICurriculoDisciplina } from './model/curriculo-disciplina.model';

@Component({
    selector: 'curriculo',
    templateUrl: './view/curriculo.component.html',
    styleUrls: ['./view/curriculo.component.scss']
})
export class CurriculoComponent implements IDataBarBind<ICurriculo> {

    acoesViewModel: IDataBarBind<ICurriculo>;
    form: FormGroup;
    entidadePaginada: CurriculoPaginado;
    statusNavBar: string;
    periodos: any[];
    cursos: ICurso[] = [];
    turnos: ITurno[] = [];

    displayedColumns: string[] = ['nomeDisciplina', 'horaAulaTotal', 'credito', 'preRequisito', 'acao'];
    dataSource: MatTableDataSource<ICurriculoDisciplina>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _formBuilder: FormBuilder,
        private _serviceCurso: CursoService,
        private _serviceTurno: TurnoService
    ) { }

    ngOnInit(): void {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
        this.entidadePaginada = new CurriculoPaginado();
        this.form = this._formBuilder.group({
            codigo: [null],
            periodo: [null, [Validators.required]],
            ano: [null, [Validators.required, Validators.pattern(/^\d{4}$/)]],
            codigoCurso: [null, [Validators.required]],
            codigoTurno: [null, [Validators.required]]
        });


        this.dataSource = new MatTableDataSource([{
            nomeDisciplina: 'Interface Homem máquina',
            horaAulaTotal: 40,
            credito: 100,
            preRequisito: true
        }] as ICurriculoDisciplina[]);

        this.dataSource.paginator = this.paginator;

        this._carregarPeriodos();

        this._serviceCurso.listarTodos().subscribe(success => {
            this.cursos = success;
        })

        this._serviceTurno.listarTodos().subscribe(success => {
            this.turnos = success;
        })
    }

    private _carregarPeriodos() {
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
    criar(): import("rxjs").Observable<ICurriculo> {
        throw new Error('Method not implemented.');
    }
    listarPaginacao(paginacao: import("../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<ICurriculo>): import("rxjs").Observable<import("../../../layout/components/app_components/databar/contrato/IDataEntidadePaginada").IDataEntidadePaginada<ICurriculo>> {
        throw new Error('Method not implemented.');
    }
    editar(): import("rxjs").Observable<ICurriculo> {
        throw new Error('Method not implemented.');
    }
    remover(): import("rxjs").Observable<any> {
        throw new Error('Method not implemented.');
    }


}
