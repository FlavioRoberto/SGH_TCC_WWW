import { Component, ViewEncapsulation, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SalaService } from "app/main/cadastros/salas/sala/services/sala.service";
import { SnackBarService } from "app/shared/services/snack-bar.service";
import { ReservaModel } from "../../../model/reserva.model";
import { AdicionarAulaDialogComponent } from "../adicionar-aula/adicionar-aula.dialog.component";
import { AdicionarAulaBaseComponent } from "../base/adicionar-aula-base.component";
import { AdicionarAulaBaseService } from "../base/adicionar-aula-base.service";
import { LancarAulaDialogDataModel } from "./models/lancar-aula-dialog.model";
import { LancarAulaModel } from "./models/lancar-aula.model";
import { LancarAulaService } from "./services/lancar-aulas.service";

@Component({
    templateUrl: "./views/lancar-aula-dialog.component.html",
    styleUrls: ["./views/lancar-aula-dialog.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class LancarAulaDialogComponent extends AdicionarAulaBaseComponent<LancarAulaDialogDataModel> {
    constructor(
        @Inject(MAT_DIALOG_DATA) data: LancarAulaDialogDataModel,
        private _service: LancarAulaService,
        private _snackBar: SnackBarService,
        private _dialogRef: MatDialogRef<AdicionarAulaDialogComponent>,
        private _formBuilder: FormBuilder,
        private _adicionarAulaBase: AdicionarAulaBaseService,
        private _sala: SalaService
    ) {
        super(data, _snackBar, _adicionarAulaBase, _sala);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this._construirFormulario();
        console.log(this.data);
    }

    fecharDialog(): void {
        this._dialogRef.close();
    }

    salvar(): void {
        const lancamento = this._prepararLancamento();
        this._service.lancarAula(lancamento).subscribe();
    }

    protected _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoDisciplina: [null],
            codigoSala: [null],
            laboratorio: [false],
            diasLancados: [null],
            horariosLancados: [null],
        });
    }

    private _prepararLancamento(): LancarAulaModel {
        const lancamento = {
            codigoDisciplina: this.form.get("codigoDisciplina").value,
            codigoSala: this.form.get("codigoSala").value,
            laboratorio: this.form.get("laboratorio").value,
            codigoHorario: this.data.codigoHorario,
            reservas: [],
        } as LancarAulaModel;

        const diasLancados = this.form.get("diasLancados").value;
        const horariosLancados = this.form.get("horariosLancados").value;

        diasLancados.forEach((dia) => {
            horariosLancados.forEach((hora) => {
                lancamento.reservas.push({
                    diaSemana: dia,
                    hora: hora,
                } as ReservaModel);
            });
        });

        return lancamento;
    }
}
