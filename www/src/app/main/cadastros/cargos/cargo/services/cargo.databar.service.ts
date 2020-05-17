import { EventEmitter, Injectable, Inject, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, Subscriber } from 'rxjs';
import { IDataBarBindService, EStatus, IDatabarBindOnClickService, DatabarEventClickService, EEventoClick } from '@breaking_dev/ic-databar-lib';
import { CargoModel } from '../models/cargo.model';
import { CargoService } from './cargo.service';
import { CargoPaginado } from '../models/cargo-paginado';
import { CargoExpansivelTableService } from './cargo.table.service';
import { ErrorDialogService } from 'app/shared/components/dialogs/error-dialog/service/error-dialog.service';
import { tap } from 'rxjs/operators';
import { CargoDisciplinaModel } from '../models/cargo-disciplina.model';

@Injectable()
export class CargoDataBarBindService implements IDatabarBindOnClickService<CargoModel>{

    status: EStatus;
    onClickEnter: EventEmitter<CargoModel>;
    eventDatabar: DatabarEventClickService;
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
        this.eventDatabar = new DatabarEventClickService(evento => {
            switch (evento) {
                case EEventoClick.onClickEditar: this.formgroup.get('codigo').disable(); break;
            }
        });
    }

    getEntidade(): CargoModel {
        return this.formgroup.getRawValue() as CargoModel;
    }

    criar(): Observable<CargoModel> {
        return this._servico.criar(this.getEntidade());
    }

    editar(): Observable<CargoModel> {
        return this._servico.editar(this.getEntidade());
    }

    remover(): Observable<CargoModel> {
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

    private _adicionarDisciplinasNaTabela(cargo: CargoModel, acaoSucesso: () => void, acaoErro: (erro: string) => void, acaoComplete: () => void): void {

        if (!cargo) {
            const erro = 'Não foram encontrados cargos cadastrados.';
            this._errorDialogService.openDialog('Atenção', erro);
            acaoErro(erro);
            return;
        }

        this._servicoExpansivelTable.carregarDisciplinas(cargo.codigo)
            .subscribe(() => acaoSucesso(), erro => acaoErro(erro), acaoComplete);
    }
}
