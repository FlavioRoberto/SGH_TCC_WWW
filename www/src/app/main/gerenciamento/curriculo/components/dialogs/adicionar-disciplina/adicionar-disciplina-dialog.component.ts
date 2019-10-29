import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnInit, Inject, Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormAutocompleteAcao } from '@compartilhado/layout/ap-form-autocomplete/contrato/IFormAutocompleteAcao';
import { IDisciplina } from 'app/main/gerenciamento/disciplina/cadastro/model/IDisciplina';
import { locale as portugues } from './../../../../i18n/pt-br';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { DisciplinaService } from 'app/main/gerenciamento/disciplina/cadastro/service/disciplina.service';
import { ICurriculoDisciplina } from '../../../model/curriculo-disciplina.model';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';

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
    disciplinas: IDisciplina[];
    periodos: any;
    filtroDisciplinaPreRequisito = '';
    private eventClickSalvar;
    private limparFormulario;
    private disciplinaEditar;

    constructor(
        private dialogRef: MatDialogRef<AdicionarDisciplinaDialogComponent>,
        private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoDisciplina: DisciplinaService,
        @Inject(MAT_DIALOG_DATA) data) {

        this.titulo = data.titulo;
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.eventClickSalvar = data.onClickSalvar;
        this.disciplinaEditar = data.disciplina;
    }

    ngOnInit(): void {

        this.periodos = EPeriodos;

        this.adicionarDisciplinaForm = this._formBuilder.group({
            disciplina: [null, [Validators.required]],
            aulasSemanaisTeorica: [null, [Validators.required]],
            aulasSemanaisPratica: [null, [Validators.required]],
            credito: [null, [Validators.required]],
            preRequisitos: [null],
            periodo: [null, [Validators.required]]
        });

        this._servicoDisciplina.listarTodos()
            .subscribe(data => {
                this.disciplinas = data;
                console.log(this.disciplinaEditar);
                if (this.disciplinaEditar) {
                    this.adicionarDisciplinaForm.setValue(this.disciplinaEditar);
                }
            });
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    salvar(): void {
        const dados = this.adicionarDisciplinaForm.getRawValue() as ICurriculoDisciplina;
        dados.disciplina = this.disciplinas.filter(i => i.codigo == this.adicionarDisciplinaForm.get('disciplina').value)[0];
        dados.preRequisitos = this.disciplinas.filter(dis => {
            const preRequisitos = this.adicionarDisciplinaForm.get('preRequisitos').value;
            if (preRequisitos) {
                return preRequisitos.filter(pre => pre == dis.codigo)[0];
            }
        });
        dados.codigoDisciplina = dados.disciplina.codigo;
        this.eventClickSalvar(dados, this.adicionarDisciplinaForm);
    }

    filtrarDisciplinasPreRequisito(filtro: string): void {
        this.filtroDisciplinaPreRequisito = filtro;
    }

    onChangeDisciplina(disciplina): void {
        this.adicionarDisciplinaForm.get('preRequisitos').setValue(null);
    }

}





