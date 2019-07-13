import { IDataBarBindService } from '@compartilhado/layout/databar/contrato/IDataBarService';
import { FormGroup } from '@angular/forms';
import { ITipo } from '../model/ITipo';
import { Observable } from 'rxjs';
import { DisciplinaTipoService } from './disciplina.tipo.service';
import { TipoPaginado } from '../model/tipo.paginacao';
import { EventEmitter } from '@angular/core';

export class DisciplinaTipoDataBarService implements IDataBarBindService<ITipo>{
    onClickEnter: EventEmitter<ITipo>;

    constructor(public formgroup: FormGroup, private _servico: DisciplinaTipoService) {
        this.onClickEnter = new EventEmitter();
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): ITipo {
        return this.formgroup.getRawValue() as ITipo;
    }

    criar(): Observable<ITipo> {
        const disciplinaTipo = this.getEntidade();
        return this._servico.criar(disciplinaTipo);
    }

    listarPaginacao(tipo: TipoPaginado): Observable<TipoPaginado> {
        return this._servico.listarPaginacao(tipo);
    }

    editar(): Observable<ITipo> {
        const disciplinaTipo = this.getEntidade();
        return this._servico.editar(disciplinaTipo);
    }
    remover(): Observable<any> {
        const codigo = this.getEntidade().codigo;
        return this._servico.remover(codigo);
    }
}