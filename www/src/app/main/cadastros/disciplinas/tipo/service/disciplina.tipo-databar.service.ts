import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';
import { DisciplinaTipoService } from './disciplina.tipo.service';
import { TipoPaginado } from '../model/tipo.paginacao';
import { TipoModel } from '../model/iTipo';

export class DisciplinaTipoDataBarService implements IDatabarBindOnClickService<TipoModel>{
    eventDatabar: DatabarEventClickService;
    status: EStatus;
    onClickEnter: EventEmitter<TipoModel>;

    constructor(public formgroup: FormGroup, private _servico: DisciplinaTipoService) {
        this.onClickEnter = new EventEmitter();
        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.afterClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    enviarFormComEnter(): void {
        this.onClickEnter.emit(this.getEntidade());
    }

    getEntidade(): TipoModel {
        return this.formgroup.getRawValue() as TipoModel;
    }

    criar(): Observable<TipoModel> {
        const disciplinaTipo = this.getEntidade();
        return this._servico.criar(disciplinaTipo);
    }

    listarPaginacao(tipo: TipoPaginado): Observable<TipoPaginado> {
        return this._servico.listarPaginacao(tipo);
    }

    editar(): Observable<TipoModel> {
        const disciplinaTipo = this.getEntidade();
        return this._servico.editar(disciplinaTipo);
    }
    remover(): Observable<any> {
        const codigo = this.getEntidade().codigo;
        return this._servico.remover(codigo);
    }
}