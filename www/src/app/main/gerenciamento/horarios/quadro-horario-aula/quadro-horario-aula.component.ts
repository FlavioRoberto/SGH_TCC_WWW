import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuadroHorarioAulaService } from './services/quadro-horario-aula.service';
import { AdicionarAulaDialogService } from './components/dialogs/adicionar-aula/adicionar-aula-dialog.service';
import { AdicionarAulaDialogDataModel } from './components/dialogs/adicionar-aula/models/adicionar-aula-dialog-data.model';
import { ConfirmaDialogService } from 'app/shared/components/dialogs/confirma-dialog/service/confirma-dialog.service';
import { AulaModel } from './model/aula.model';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './views/quadro-horario-aula.component.html',
    styleUrls: ['./views/quadro-horario-aula.component.scss']
})
export class QuadroHorarioAulaComponent implements OnInit {

    private _data: AdicionarAulaDialogDataModel;

    carregandoAulas = false;
    horarios = [];
    diasDaSemana = [];
    aulas: AulaModel[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _quadroHorarioAulaService: QuadroHorarioAulaService,
        private _adicionarAulaDialogService: AdicionarAulaDialogService,
        private _confirmaDialogService: ConfirmaDialogService) { }

    ngOnInit(): void {
        this._recuperarCodigoHorarioSelecionado();
        this.horarios = this._quadroHorarioAulaService.listarHorarios();
        this.diasDaSemana = this._quadroHorarioAulaService.listarDiasSemana();
        this._carregarAulas();
    }

    retornarAulas(horario: string, diaSemana: string): AulaModel[] {
        return this.aulas.filter(lnq => lnq.reserva.dia === diaSemana && lnq.reserva.hora === horario);
    }

    existeHorario(horario, dia): boolean {
        return this.aulas.filter(lnq => lnq.reserva.dia === dia && lnq.reserva.hora === horario).length > 0;
    }

    removerAula(horario: AulaModel): void {
        this._confirmaDialogService.acaoOk = () => this._removerAula();
        this._confirmaDialogService.mensagemCarregando = `Removendo aula de ${horario.disciplina}...`;
        this._confirmaDialogService.abrirDialog('Atenção', 'Existe uma aula reservada para o horário selecionado, deseja removê-la?');
    }

    adicionarAula(horario: string, diaSemana: string): void {
        this._data.titulo = 'Adicionar aula';
        this._data.reserva = {
            dia: diaSemana,
            hora: horario
        };
        this._adicionarAulaDialogService.abrirDialog(this._data);
    }

    private _carregarAulas(): void {
        this.carregandoAulas = true;

        this._quadroHorarioAulaService.listarAulas(this._data.codigoHorario)
            .pipe(finalize(() => this.carregandoAulas = false))
            .subscribe(dados => {
                dados.forEach(item => this.aulas.push(item));
            });
    }

    private _recuperarCodigoHorarioSelecionado(): void {
        this._data = new AdicionarAulaDialogDataModel();

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

    private _removerAula(): void {
        alert('Teste');
    }
}
