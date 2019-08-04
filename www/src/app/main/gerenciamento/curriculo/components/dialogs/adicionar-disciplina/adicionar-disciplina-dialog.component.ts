import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { OnInit, Inject, Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormAutocompleteAcao } from '@compartilhado/layout/ap-form-autocomplete/contrato/IFormAutocompleteAcao';
import { IDisciplina } from 'app/main/gerenciamento/disciplina/cadastro/model/IDisciplina';
import { locale as portugues } from './../../../../i18n/pt-br';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { DisciplinaService } from 'app/main/gerenciamento/disciplina/cadastro/service/disciplina.service';

@Component({
    selector: 'adicionar-disciplina-dialog',
    templateUrl: './view/adicionar-disciplina-dialog.component.html',
    styleUrls: ['./view/adicionar-disciplina-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdicionarDisciplinaDialogComponent implements OnInit {

    alterarSenhaForm: FormGroup;
    emProgresso = false;
    titulo: string;
    adicionarDisciplinaForm: FormGroup;
    acaoAutoCompleteDisciplina: IFormAutocompleteAcao;
    pesquisandoDisciplina: boolean;
    disciplinaSelecionada: IDisciplina = null;

    constructor(
        private dialogRef: MatDialogRef<AdicionarDisciplinaDialogComponent>,
        private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoDisciplina: DisciplinaService,
        @Inject(MAT_DIALOG_DATA) data) {

        this.titulo = data.titulo;
        this._fuseTranslationLoaderService.loadTranslations(portugues);

    }

    ngOnInit(): void {
        this.adicionarDisciplinaForm = this._formBuilder.group({
            disciplina: [null, [Validators.required]],
            cargaHorariaSemanalTeorica: [null],
            cargaHorariaSemanalPratica: [null],
            horaTotal: [null],
            horaAulaTotal: [null],
            credito: [null]
        });

        this.acaoAutoCompleteDisciplina = {
            pesquisar: (filter: string) => {
                return this._servicoDisciplina.listarPorDescricao(filter);
            },
            matOptionValueBind: (item: IDisciplina) => {
                return item.descricao;
            }
        } as IFormAutocompleteAcao;
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    salvar(): void {

    }

    onItemDisciplinaSelected(disciplina: IDisciplina): void {
        this.disciplinaSelecionada = disciplina;
        this.adicionarDisciplinaForm.get('disciplina').disable();
    }

    onBlurDisciplina(event): void {
        this.adicionarDisciplinaForm.get('disciplina').reset();
    }

    onClickNovaPesquisaDisciplina(): void {
        this.adicionarDisciplinaForm.get('disciplina').reset();
        this.adicionarDisciplinaForm.get('disciplina').enable();
        this.disciplinaSelecionada = null;
    }

    private exibirSnackBar(mensagem: string): void {
        this._snackBar.open(mensagem, 'OK', {
            panelClass: 'sucesso',
            duration: 3500,
            horizontalPosition: 'center'
        });
    }
}





