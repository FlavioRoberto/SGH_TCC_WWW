import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, concat, forkJoin } from 'rxjs';

import { Cargo } from '../models/cargo.model';
import { CargoService } from './cargo.service';
import { CargoPaginado } from '../models/cargo-paginado';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';
import { tap, finalize, flatMap } from 'rxjs/operators';
import { CargoExpansivelTableService } from './cargo.table.service';

@Injectable()
export class CargoDataBarBindService implements IDataBarBindService<Cargo>{

    status: EStatus;
    onClickEnter: EventEmitter<Cargo>;

    constructor(
        private _servico: CargoService,
        private _servicoExpansivelTable: CargoExpansivelTableService,
        public formgroup: FormGroup) {
        this.onClickEnter = new EventEmitter();
    }

    getEntidade(): Cargo {
        return this.formgroup.getRawValue() as Cargo;
    }

    criar(): Observable<Cargo> {
        return this._servico.criar(this.getEntidade());
    }

    editar(): Observable<Cargo> {
        return this._servico.editar(this.getEntidade());
    }

    remover(): Observable<Cargo> {
        return this._servico.remover(this.getEntidade().codigo);
    }

    listarPaginacao(entidadePaginada: CargoPaginado): Observable<CargoPaginado> {
        return new Observable(observer => {
            this._servico.listarPaginacao(entidadePaginada)
                .subscribe(dados => this._adicionarDisciplinasNaTabela(dados.entidade[0],
                    () => observer.next(dados),
                    erro => observer.error(erro),
                    observer.complete
                ), error => {
                    observer.error(error);
                    observer.complete();
                });
        });
    }

    private _adicionarDisciplinasNaTabela(cargo: Cargo, acaoSucesso: () => void, acaoErro: (erro: string) => void, acaoComplete: () => void): void {
        this._servico.listarDisciplinas(cargo.codigo)
            .subscribe(disciplinas => {
                this._servicoExpansivelTable.dataSource.addRange(disciplinas);
                acaoSucesso();
            }, erro => acaoErro(erro), acaoComplete);
    }
}
