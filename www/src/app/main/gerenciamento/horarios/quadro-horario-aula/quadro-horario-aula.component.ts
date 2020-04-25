import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AulaModel } from './model/quadro-horario-model';
import { QuadroHorarioAulaService } from './services/quadro-horario-aula.service';
import { AdicionarAulaDialogService } from './components/dialogs/adicionar-aula/adicionar-aula-dialog.service';
import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { AdicionarAulaDialogDataModel } from './components/dialogs/adicionar-aula/models/adicionar-aula-dialog-data.model';

@Component({
    templateUrl: './views/quadro-horario-aula.component.html',
    styleUrls: ['./views/quadro-horario-aula.component.scss']
})
export class QuadroHorarioAulaComponent implements OnInit {

    private _data: AdicionarAulaDialogDataModel;

    horarios = [];
    diasDaSemana = [];
    aulas = [];

    constructor(
        private _route: ActivatedRoute,
        private _quadroHorarioAulaService: QuadroHorarioAulaService,
        private _adicionarAulaDialogService: AdicionarAulaDialogService) { }

    ngOnInit(): void {
        this._data = new AdicionarAulaDialogDataModel();
        this._recuperarCodigoHorarioSelecionado();
        this.horarios = this._quadroHorarioAulaService.listarHorarios();
        this.diasDaSemana = this._quadroHorarioAulaService.listarDiasSemana();
        this.aulas = this._quadroHorarioAulaService.listarAulas();
    }

    retornarAulas(horario: string, diaSemana: string): any[] {
        return this.aulas.filter(lnq => lnq.dia === diaSemana && lnq.horario === horario);
    }

    existeHorario(horario, dia): boolean {
        return this.aulas.filter(lnq => lnq.dia === dia && lnq.horario === horario).length > 0;
    }

    atualizarAula(horario: AulaModel): void {
        alert('atualizando...' + horario.codigo);
    }

    adicionarAula(): void {
        this._data.titulo = 'Adicionar aula';
        this._adicionarAulaDialogService.abrirDialog(this._data);
    }

    private _recuperarCodigoHorarioSelecionado(): void {

        this._route.queryParams.subscribe(params => {
            this._data.codigoCurriculo = params['codigoCurriculo'] as number;
            this._data.codigoTurno = params['codigoTurno'] as number;
            this._data.ano = params['ano'] as number;
            this._data.semestre = params['semestre'] as number;
            this._data.periodo = params['periodo'] as number;
        });

        this._route.params.subscribe(params => {
            this._data.codigoHorario = params['codigoHorario'] as number;
        });
    }
}
