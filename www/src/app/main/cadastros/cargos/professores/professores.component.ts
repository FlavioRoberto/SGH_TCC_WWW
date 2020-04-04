import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Professor } from './models/professor.model';
import { ProfessorPaginado } from './models/professor-paginado.model';
import { ProfessorDataBarService } from './services/professor.databar.service';
import { ProfessorService } from './services/professor.service';
import { celularRegex, matriculaRegex } from 'app/shared/regex/input-regex';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from '../../curso/model/curso.model';
import { IDataBarBindComponent, EStatus } from '@breaking_dev/ic-databar-lib';

@Component({
    templateUrl: './view/professores.component.html',
    styleUrls: ['./view/professores.component.scss']
})
export class ProfessoresComponent implements IDataBarBindComponent<Professor> {
    statusDataBar: EStatus;
    form: FormGroup;
    entidadePaginada: ProfessorPaginado;
    servicoDataBarBind: ProfessorDataBarService;
    status: EStatus;
    EStatus = EStatus;
    cursos: ICurso[];

    constructor(private _formBuilder: FormBuilder,
        private _servico: ProfessorService,
        private _route: ActivatedRoute,
        private _changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this._construirFormulario();
        this.entidadePaginada = new ProfessorPaginado();
        this.servicoDataBarBind = new ProfessorDataBarService(this.form, this._servico);
        this.cursos = this._route.snapshot.data['cursos'];
        this._changeDetector.detectChanges();
    }

    get condicaoDataBar(): boolean {
        return this.status === EStatus.inserindo || this.status === EStatus.editando;
    }

    statusChanged(status: EStatus): void {
        this.status = status;
    }

    private _construirFormulario(): void {
        this.form = this._formBuilder.group({
            codigo: new FormControl(null),
            nome: new FormControl(null, [Validators.required, Validators.maxLength(45)]),
            telefone: new FormControl(null, [Validators.maxLength(20), Validators.required, Validators.pattern(celularRegex)]),
            email: new FormControl(null, [Validators.maxLength(45), Validators.required, Validators.email]),
            matricula: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern(matriculaRegex)]),
            ativo: new FormControl(null)
        });
    }
}
