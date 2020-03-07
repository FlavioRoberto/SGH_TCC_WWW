import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnInit, Inject, Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormAutocompleteAcao } from '@compartilhado/layout/ap-form-autocomplete/contrato/IFormAutocompleteAcao';
import { locale as portugues } from './../../../../i18n/pt-br';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { DisciplinaService } from 'app/main/gerenciamento/disciplina/cadastro/service/disciplina.service';
import { ICurriculoDisciplina } from '../../../model/curriculo-disciplina.model';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { Disciplina } from 'app/main/gerenciamento/disciplina/cadastro/model/disciplina';
import { CurriculoService } from '../../../services/curriculo.service';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { DisciplinaCurriculoDialoData } from '../../model/disciplina-curriculo-dialog-data';
import { finalize } from 'rxjs/operators';

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
    disciplinas: Disciplina[];
    periodos: any;
    filtroDisciplinaPreRequisito = '';
    private codigoCurriculo: number;
    private eventClickSalvar;
    private disciplinaEditar;

    constructor(
        private dialogRef: MatDialogRef<AdicionarDisciplinaDialogComponent>,
        private _curriculoService: CurriculoService,
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _servicoDisciplina: DisciplinaService,
        @Inject(MAT_DIALOG_DATA) data: DisciplinaCurriculoDialoData) {

        this.titulo = data.titulo;
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.eventClickSalvar = data.onClickSalvar;
        this.disciplinaEditar = data.disciplinaEditar;
        this.codigoCurriculo = data.codigoCurriculo;
    }

    ngOnInit(): void {

        this.periodos = EPeriodos;

        this.adicionarDisciplinaForm = this._formBuilder.group({
            disciplina: [null, [Validators.required]],
            aulasSemanaisTeorica: [null, [Validators.required]],
            aulasSemanaisPratica: [null, [Validators.required]],
            preRequisitos: [null],
            periodo: [null, [Validators.required]]
        });

        this._servicoDisciplina.listarTodos()
            .subscribe(data => {
                this.disciplinas = data;
                if (this.disciplinaEditar) {
                    this.adicionarDisciplinaForm.patchValue(this.disciplinaEditar);
                }
            });
    }

    fecharDialog(): void {
        this.dialogRef.close();
    }

    salvar(): void {
        this.emProgresso = true;
        const disciplinaAdicionar = this.adicionarDisciplinaForm.getRawValue() as ICurriculoDisciplina;
        disciplinaAdicionar.disciplina = this.disciplinas.filter(i => i.codigo === this.adicionarDisciplinaForm.get('disciplina').value)[0];
        disciplinaAdicionar.preRequisitos = this.disciplinas.filter(dis => {
            const preRequisitos = this.adicionarDisciplinaForm.get('preRequisitos').value;
            if (preRequisitos) {
                return preRequisitos.filter(pre => pre === dis.codigo)[0];
            }
        });

        disciplinaAdicionar.codigoDisciplina = disciplinaAdicionar.disciplina.codigo;
        disciplinaAdicionar.codigoCurriculo = this.codigoCurriculo;

        this._curriculoService.adicionarDisciplina(disciplinaAdicionar)
            .pipe(finalize(() => this.emProgresso = false))
            .subscribe(() => this.eventClickSalvar(disciplinaAdicionar, this.adicionarDisciplinaForm));
    }

    filtrarDisciplinasPreRequisito(filtro: string): void {
        this.filtroDisciplinaPreRequisito = filtro;
    }

    onChangeDisciplina(disciplina): void {
        this.adicionarDisciplinaForm.get('preRequisitos').patchValue(null);
    }

}





