import { EventEmitter, Injectable, Inject, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDataBarBindService, EStatus } from '@breaking_dev/ic-databar-lib';
import { Cargo } from '../models/cargo.model';
import { CargoService } from './cargo.service';
import { CargoPaginado } from '../models/cargo-paginado';
import { CargoExpansivelTableService } from './cargo.table.service';
import { ErrorDialogService } from 'app/shared/components/dialogs/error-dialog/service/error-dialog.service';

@Injectable()
export class CargoDataBarBindService implements IDataBarBindService<Cargo>{

    status: EStatus;
    onClickEnter: EventEmitter<Cargo>;
    private _servico: CargoService;
    private _servicoExpansivelTable: CargoExpansivelTableService;
    private _errorDialogService: ErrorDialogService;

    constructor(
        private _injector: Injector,
        public formgroup: FormGroup) {
        this._servico = this._injector.get(CargoService);
        this._servicoExpansivelTable = this._injector.get(CargoExpansivelTableService);
        this._errorDialogService = this._injector.get(ErrorDialogService);
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

        if (!cargo) {
            const erro = 'Não foram encontrados cargos cadastrados.';
            this._errorDialogService.openDialog('Atenção', erro);
            acaoErro(erro);
            return;
        }

        this._servico.listarDisciplinas(cargo.codigo)
            .subscribe(disciplinas => {
                this._servicoExpansivelTable.dataSource.addRange(disciplinas);
                acaoSucesso();
            }, erro => acaoErro(erro), acaoComplete);
    }
}
