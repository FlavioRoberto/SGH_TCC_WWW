import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from 'app/main/cadastros/curso/service/curso.service';
import { CursoModel } from 'app/main/cadastros/curso/model/curso.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { TurnoService } from 'app/main/cadastros/turno/service/turno.service';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { HorarioGeralRelatorioService } from './services/horario-geral.service';
import { finalize } from 'rxjs/operators';
import { HorarioGeralRelatorioModel } from './models/horario-geral-relatorio.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    templateUrl: './views/horario-geral.component.html'
})
export class HorarioGeralComponent implements OnInit {

    form: FormGroup;
    cursos: CursoModel[];
    turnos: TurnoModel[];
    semestres: ESemestre[];
    gerandoRelatorio: boolean;
    relatorio: SafeUrl;

    constructor(private _formBuilder: FormBuilder,
        private _cursoService: CursoService,
        private _turnoServico: TurnoService,
        private _horarioGeralService: HorarioGeralRelatorioService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.gerandoRelatorio = false;
        this.relatorio = "";
        this._construirFormulario();
        this._carregarCursos();
        this._carregarTurnos();
        this._carregarSemestres();
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
        const filtro = this.form.getRawValue() as HorarioGeralRelatorioModel;
        console.log(filtro);
        this._horarioGeralService.gerarRelatorio(filtro)
            .pipe(finalize(() => {
                this.gerandoRelatorio = false;
                this.form.enable();
            }))
            .subscribe(base64 => {
                this.relatorio = `data:application/pdf;base64,${base64}`;
                console.log(this.relatorio);
            });
    }

    private _carregarCursos(): void {
        this._cursoService.listarTodos().subscribe(dados => this.cursos = dados);
    }

    private _carregarTurnos(): void {
        this._turnoServico.listarTodos().subscribe(dados => this.turnos = dados);
    }

    private _carregarSemestres(): void {
        this.semestres = [ESemestre.Primeiro, ESemestre.Segundo];
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigoCurso: [null, [Validators.required]],
            codigoTurno: [null, [Validators.required]],
            ano: [null, [Validators.required]],
            semestre: [null, [Validators.required]]
        });
    }

}
