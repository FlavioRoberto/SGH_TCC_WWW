import { Inject, Injectable, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SalaModel } from "app/main/cadastros/salas/sala/model/sala.model";
import { SalaService } from "app/main/cadastros/salas/sala/services/sala.service";
import { SnackBarService } from "app/shared/services/snack-bar.service";
import { finalize } from "rxjs/operators";
import { AdicionarAulaBaseService } from "./adicionar-aula-base.service";
import { AdicionarAulaBaseDataModel } from "./adicionar-aula-data-base.model";

@Injectable()
export abstract class AdicionarAulaBaseComponent<
    T extends AdicionarAulaBaseDataModel
    > implements OnInit {
    salvando = false;
    form: FormGroup;
    carregandoDisciplinas = false;
    carregandoSalas = false;
    disciplinas: T[] = [];
    disciplinasAuxiliares: T[] = [];
    salas: SalaModel[];
    data: T;
    @ViewChild("filtroDisciplina", { static: true }) filtroDisciplina;
    @ViewChild("filtroSala", { static: true }) filtroSala;
    protected abstract _construirFormulario();
    public abstract fecharDialog();

    constructor(
        @Inject(MAT_DIALOG_DATA) data: T,
        private _snackBarService: SnackBarService,
        private _adicionarAulaBaseService: AdicionarAulaBaseService,
        private _salaServico: SalaService
    ) {
        this.data = data;
    }

    ngOnInit(): void {
        this._listarDisciplinas();
        this._listarSalas();
        this._construirFormulario();
    }

    get desabilitarBotaoSalvar(): boolean {
        return (
            this.form.invalid || this.form.errors?.length > 0 || this.salvando
        );
    }

    onOpenedChangeDisciplina(): void {
        this.filtroDisciplina.nativeElement.value = "";
        this.filtroDisciplina.nativeElement.focus();
    }

    onOpenedChangeLista(): void {
        this.filtroSala.nativeElement.value = "";
        this.filtroSala.nativeElement.focus();
    }

    protected _exibirMensagemSucesso(mensagem: string): void {
        this._snackBarService.exibirSnackBarSucesso(mensagem);
        this.fecharDialog();
    }

    private _listarDisciplinas(): void {
        this.carregandoDisciplinas = true;
        this._adicionarAulaBaseService
            .listarDisciplinas<T>(this.data)
            .pipe(finalize(() => (this.carregandoDisciplinas = false)))
            .subscribe((disciplinas) => {
                this.disciplinas.length = 0;
                this.disciplinasAuxiliares.length = 0;
                disciplinas.forEach(dis => this.disciplinas.push(dis))
            });
    }

    private _listarSalas(): void {
        this.carregandoSalas = true;

        this._salaServico
            .listarTodos()
            .pipe(finalize(() => (this.carregandoSalas = false)))
            .subscribe((salas) => (this.salas = salas));
    }
}
