import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AdicionarAulaDialogDataModel } from "./models/adicionar-aula-dialog-data.model";
import { AdicionarAulaService } from "./services/adicionar-aula.service";
import { finalize } from "rxjs/operators";
import { SalaService } from "app/main/cadastros/salas/sala/services/sala.service";
import { AulaModel } from "../../../model/aula.model";
import { SnackBarService } from "app/shared/services/snack-bar.service";
import { AdicionarAulaBaseComponent } from "../base/adicionar-aula-base.component";
import { AdicionarAulaBaseService } from "../base/adicionar-aula-base.service";

@Component({
    templateUrl: "./views/adicionar-aula-dialog.component.html",
    styleUrls: ["./views/adicionar-aula-dialog.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class AdicionarAulaDialogComponent extends AdicionarAulaBaseComponent<AdicionarAulaDialogDataModel> {

    constructor(
        @Inject(MAT_DIALOG_DATA) data: AdicionarAulaDialogDataModel,
        private _snackBar: SnackBarService,
        private _adicionarAulaService: AdicionarAulaService,
        private dialogRef: MatDialogRef<AdicionarAulaDialogComponent>,
        private _formBuilder: FormBuilder,
        private _adicionarAulaBase: AdicionarAulaBaseService,
        private _sala: SalaService
    ) {
        super(data, _snackBar, _adicionarAulaBase, _sala);
    }

    get possuiDesdobramento(): boolean {
        return this.form.get("desdobramento").value;
    }

    salvar(): void {
        this.salvando = true;
        const aula = this.form.getRawValue() as AulaModel;
        this._adicionarAulaService
            .criarAula(aula)
            .pipe(finalize(() => (this.salvando = false)))
            .subscribe(() => {
                this._exibirMensagemSucesso("Aula cadastrada com sucesso!");
                this.data.executarAoSalvar();
            });
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    protected _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoHorario: [this.data.codigoHorario],
            codigoDisciplina: [null],
            codigoSala: [null],
            laboratorio: [false],
            desdobramento: [false],
            descricaoDesdobramento: [null],
            reserva: this._formBuilder.group({
                diaSemana: [this.data.reserva.diaSemana],
                hora: [this.data.reserva.hora],
            }),
        });
    }
}
