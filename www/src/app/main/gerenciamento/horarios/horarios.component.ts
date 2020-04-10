import { Component, OnInit } from '@angular/core';
import { EPeriodos } from 'app/shared/enums/eperiodos.enum';
import { ESemestre, ESemestreLabel } from 'app/shared/enums/esemestre.enum';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { HorarioModel } from './model/horario.model';
import { HorarioService } from './services/horario.service';
import { CadastroHorarioDialogService } from './components/dialogs/cadastro-horario/services/cadastro-horario.dialog.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurriculoService } from 'app/main/cadastros/curriculo/services/curriculo.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './view/horarios.component.html',
    styleUrls: ['./view/horarios.component.scss']
})
export class HorariosComponent implements OnInit {

    form: FormGroup;
    curriculos: CurriculoModel[] = [];
    turnos: TurnoModel[] = [];
    horarios: HorarioModel[] = [];
    periodos = EPeriodos;
    semestres = [ESemestre.Primeiro, ESemestre.Segundo];
    carregandoCurriculos = false;

    constructor(
        private _horarioServico: HorarioService,
        private _cadastroHorarioDialogService: CadastroHorarioDialogService,
        private _curriculoService: CurriculoService,
        private _formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this._horarioServico.listar().subscribe(dados => this.horarios = dados);
        this._inicializarFormulario();
        this._carregarCurriculos();
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    removerHorario(horario: HorarioModel): void {
        alert('removendo...');
    }

    editarHorario(horario: HorarioModel): void {
        alert('editando...');
    }

    selecionarHorario(horario: HorarioModel): void {
        alert('selecionando...');
    }

    adicionarHorarios(): void {
        this._cadastroHorarioDialogService.abrirDialog({
            titulo: 'Cadastrar novo horário',
            curriculos: this.curriculos,
            periodos: this.periodos,
            semestres: this.semestres,
            horarioFiltrado: this.form.getRawValue() as HorarioModel
        });
    }

    private _carregarCurriculos(): void {
        this.carregandoCurriculos = true;
        
        this._curriculoService.listarTodos()
            .pipe(finalize(() => this.carregandoCurriculos = false))
            .subscribe(curriculos => this.curriculos = curriculos);
    }

    private _inicializarFormulario(): void {
        this.form = this._formBuilder.group({
            curriculo: [null],
            periodo: [null],
            semestre: [null],
            ano: [null]
        });
    }
}
