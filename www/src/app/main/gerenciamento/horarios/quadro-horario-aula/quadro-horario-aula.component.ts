import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuadroHorarioAulaService } from "./services/quadro-horario-aula.service";
import { AdicionarAulaDialogService } from "./components/dialogs/adicionar-aula/adicionar-aula-dialog.service";
import { AdicionarAulaDialogDataModel } from "./components/dialogs/adicionar-aula/models/adicionar-aula-dialog-data.model";
import { ConfirmaDialogService } from "app/shared/components/dialogs/confirma-dialog/service/confirma-dialog.service";
import { AulaModel } from "./model/aula.model";
import { finalize } from "rxjs/operators";
import { SnackBarService } from "app/shared/services/snack-bar.service";
import { LancarAulaDialogService } from "./components/dialogs/lancar-aulas/lancar-aula-dialog.service";
import { AdicionarAulaBaseDataModel } from "./components/dialogs/base/adicionar-aula-data-base.model";
import { LancarAulaDialogDataModel } from "./components/dialogs/lancar-aulas/models/lancar-aula-dialog.model";

@Component({
    templateUrl: "./views/quadro-horario-aula.component.html",
    styleUrls: ["./views/quadro-horario-aula.component.scss"],
})
export class QuadroHorarioAulaComponent implements OnInit {
    private _data: AdicionarAulaBaseDataModel;

    carregandoAulas = false;
    horarios = [];
    diasDaSemana = [];
    aulas: AulaModel[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _quadroHorarioAulaService: QuadroHorarioAulaService,
        private _adicionarAulaDialogService: AdicionarAulaDialogService,
        private _lancarAulaDialogService: LancarAulaDialogService,
        private _confirmaDialogService: ConfirmaDialogService,
        private _snackBarService: SnackBarService
    ) {}

    ngOnInit(): void {
        this._recuperarCodigoHorarioSelecionado();
        this.horarios = this._data.horariosTurno;
        this.diasDaSemana = this._quadroHorarioAulaService.listarDiasSemana();
        this._carregarAulas();
    }

    retornarAulas(horario: string, diaSemana: string): AulaModel[] {
        return this.aulas.filter(
            (lnq) =>
                lnq.reserva.diaSemana === diaSemana &&
                lnq.reserva.hora === horario
        );
    }

    existeHorario(horario, dia): boolean {
        return (
            this.aulas.filter(
                (lnq) =>
                    lnq.reserva.diaSemana === dia &&
                    lnq.reserva.hora === horario
            ).length > 0
        );
    }

    removerAula(aula: AulaModel): void {
        this._confirmaDialogService.acaoOk = () =>
            this._removerAula(aula.codigo, () =>
                this._confirmaDialogService.fecharDialog()
            );
        this._confirmaDialogService.mensagemCarregando = `Removendo aula de ${aula.disciplina}...`;
        this._confirmaDialogService.abrirDialog(
            "Atenção",
            "Existe uma aula reservada para o horário selecionado, deseja removê-la?"
        );
    }

    adicionarAula(horario: string, diaSemana: string): void {
        let _dataAdicionar = { ...this._data } as AdicionarAulaDialogDataModel;
        _dataAdicionar.titulo = "Adicionar aula";
        _dataAdicionar.reserva = {
            diaSemana: diaSemana,
            hora: horario,
        };
        this._adicionarAulaDialogService.abrirDialog(_dataAdicionar);
    }

    lancarAulas() {
        let dataLancarAula = { ...this._data } as LancarAulaDialogDataModel;
        dataLancarAula.horarios = this.horarios;
        dataLancarAula.diasDaSemana = this.diasDaSemana;
        this._lancarAulaDialogService.abrirDialog(dataLancarAula);
    }

    private _carregarAulas(): void {
        this.carregandoAulas = true;

        this._quadroHorarioAulaService
            .listarAulas(this._data.codigoHorario)
            .pipe(finalize(() => (this.carregandoAulas = false)))
            .subscribe((aulas) => (this.aulas = aulas));
    }

    private _recuperarCodigoHorarioSelecionado(): void {
        const data = (this._data = new AdicionarAulaDialogDataModel());

        this._route.queryParams.subscribe((params) => {
            data.codigoCurriculo = params["codigoCurriculo"] as number;
            data.codigoTurno = params["codigoTurno"] as number;
            data.horariosTurno = (params["horariosTurno"] as string).split(",");
            data.ano = params["ano"] as number;
            data.semestre = params["semestre"] as number;
            data.periodo = params["periodo"] as number;
        });

        this._route.params.subscribe((params) => {
            data.codigoHorario = params["codigoHorario"] as number;
        });

        data.executarAoSalvar = () => this._carregarAulas();
    }

    private _removerAula(codigoAula: number, acaoFinalizar: () => void): void {
        this._quadroHorarioAulaService
            .removerAula(codigoAula)
            .pipe(
                finalize(() => {
                    this._carregarAulas();
                    acaoFinalizar();
                })
            )
            .subscribe(() =>
                this._snackBarService.exibirSnackBarSucesso(
                    "Aula removida com sucesso."
                )
            );
    }
}
