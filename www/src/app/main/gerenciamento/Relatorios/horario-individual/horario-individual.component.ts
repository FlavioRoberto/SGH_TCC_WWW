import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { finalize } from 'rxjs/operators';
import { Professor } from 'app/main/cadastros/cargos/professores/models/professor.model';
import { ProfessorService } from '../../../cadastros/cargos/professores/services/professor.service';
import { HorarioIndividualRelatorioModel } from './models/horario-individual.model';
import { HorarioIndividualRelatorioService } from './services/horario-individual.service';

@Component({
    templateUrl: './views/horario-individual.component.html'
})
export class HorarioIndividualComponent implements OnInit {

    form: FormGroup;
    professores: Professor[] = [];
    semestres: ESemestre[];
    gerandoRelatorio: boolean;
    relatorio: string;

    constructor(private _formBuilder: FormBuilder,
        private _professorService: ProfessorService,
        private _horarioIndividualService: HorarioIndividualRelatorioService) { }

    ngOnInit(): void {
        this.gerandoRelatorio = false;
        this.relatorio = '';
        this._construirFormulario();
        this._carregarSemestres();
        this._carregarProfessor();
    }

    get desabilitarBotao(): boolean {
        return this.gerandoRelatorio || this.form.invalid;
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    gerarRelatorio(): void {
        this.gerandoRelatorio = true;
        this.form.disable();
        const filtro = this.form.getRawValue() as HorarioIndividualRelatorioModel;
        this._horarioIndividualService.gerarRelatorio(filtro)
            .pipe(finalize(() => {
                this.gerandoRelatorio = false;
                this.form.enable();
            }))
            .subscribe(base64 => {
                this.relatorio = `data:application/pdf;base64,${base64}`;
            });
    }

    baixarPdf(): void {
        const downloadLink = document.createElement('a');
        downloadLink.href = this.relatorio;
        downloadLink.download = 'horario-individual.pdf';
        downloadLink.click();
    }


    private _carregarProfessor(): void {
        this._professorService
            .listarAtivos()
            .subscribe(professores => this.professores = professores);
    }


    private _carregarSemestres(): void {
        this.semestres = [ESemestre.Primeiro, ESemestre.Segundo];
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoProfessor: [null, [Validators.required]],
            ano: [null, [Validators.required]],
            semestre: [null, [Validators.required]]
        });
    }

}
