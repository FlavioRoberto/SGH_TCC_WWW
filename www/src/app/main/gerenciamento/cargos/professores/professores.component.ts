import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDataBarBindComponent } from '@compartilhado/layout/databar/contrato/idatabar-bind';
import { Professor } from './models/professor.model';
import { ProfessorPaginado } from './models/professor-paginado.model';
import { ProfessorDataBarService } from './services/professor.databar.service';
import { EStatus } from '@compartilhado/layout/databar/enum/estatus';
import { ProfessorService } from './services/professor.service';
import { celularRegex, matriculaRegex } from '@compartilhado/util/input-regex/input-regex';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from '../../curso/model/curso.model';

@Component({
    templateUrl: './view/professores.component.html',
    styleUrls: ['./view/professores.component.scss']
})
export class ProfessoresComponent implements IDataBarBindComponent<Professor> {
    form: FormGroup;
    entidadePaginada: ProfessorPaginado;
    statusNavBar: string;
    servicoDataBarBind: ProfessorDataBarService;
    status: EStatus;
    EStatus = EStatus;
    cursos: ICurso[];

    constructor(private _formBuilder: FormBuilder,
        private _servico: ProfessorService,
        private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._construirFormulario();
        this.entidadePaginada = new ProfessorPaginado();
        this.servicoDataBarBind = new ProfessorDataBarService(this.form, this._servico);
        this.cursos = this._route.snapshot.data['cursos'];

    }

    get condicaoDataBar(): boolean {
        return this.status === EStatus.inserindo || this.status === EStatus.editando;
    }

    statusChanged(status: EStatus): void {
        this.status = status;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: [null],
            nome: [null, [Validators.required, Validators.maxLength(45)]],
            telefone: [null, [Validators.maxLength(20), Validators.required, Validators.pattern(celularRegex)]],
            email: [null, [Validators.maxLength(45), Validators.required, Validators.email]],
            matricula: [null, [Validators.required, Validators.maxLength(10), Validators.pattern(matriculaRegex)]],
            ativo: [null]
        });
    }
}
