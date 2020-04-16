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
import { HorarioFiltroModel } from './model/horario-filtro.model';

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
    pesquisandoHorarios = false;
    pesquisaAtiva = false;

    constructor(
        private _horarioServico: HorarioService,
        private _cadastroHorarioDialogService: CadastroHorarioDialogService,
        private _curriculoService: CurriculoService,
        private _formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this._inicializarFormulario();
        this._carregarCurriculos();
    }

    get habilitarBotaoLimpar(): boolean {
        return this.horarios.length > 0;
    }

    retornarDescricaoSemestre(semestre: ESemestre): string {
        return ESemestreLabel.get(semestre);
    }

    removerHorario(horario: HorarioModel): void {
        alert('removendo...');
    }

    editarHorario(horario: HorarioModel): void {
        alert(`editando horário ${horario.codigo}`);
        this._abrirDialogCadastroHorario('Editar horário', horario);
    }

    selecionarHorario(horario: HorarioModel): void {
        alert('selecionando...');
    }

    adicionarHorarios(): void {
        const horarioFiltrado = this.form.getRawValue() as HorarioModel;
        this._abrirDialogCadastroHorario('Cadastrar horário', horarioFiltrado);
    }

    pesquisarHorarios(): void {
        this.pesquisandoHorarios = true;

        const filtro = {
            ano: this.form.get('ano').value,
            codigoCurriculo: this.form.get('codigoCurriculo').value,
            periodo: this.form.get('periodo').value,
            semestre: this.form.get('semestre').value
        } as HorarioFiltroModel;

        this._horarioServico.listar(filtro)
            .pipe(finalize(() => this.pesquisandoHorarios = false))
            .subscribe(dados => this.horarios = dados);
    }

    limparPesquisa(): void {
        this.horarios = [];
        this.form.reset();
    }

    private _carregarCurriculos(): void {
        this.carregandoCurriculos = true;

        this._curriculoService.listarTodos()
            .pipe(finalize(() => this.carregandoCurriculos = false))
            .subscribe(curriculos => this.curriculos = curriculos);
    }

    private _inicializarFormulario(): void {
        this.form = this._formBuilder.group({
            codigoCurriculo: [null],
            periodo: [null],
            semestre: [null],
            ano: [null]
        });
    }

    private _abrirDialogCadastroHorario(titulo: string, horario: HorarioModel): void {
        this._cadastroHorarioDialogService.abrirDialog({
            titulo: titulo,
            curriculos: this.curriculos,
            periodos: this.periodos,
            semestres: this.semestres,
            horarioFiltrado: horario,
            salvar: this._executarAoSalvarHorario
        });
    }

    private _executarAoSalvarHorario(horario: HorarioModel): void {
        alert(`salvou o horário ${horario.codigo}`);
    }
}
