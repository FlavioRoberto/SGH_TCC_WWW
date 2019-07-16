import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    HostListener,
    ElementRef,
    ViewChild,
    OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatSnackBar, MatDrawer } from '@angular/material';

import { IDataEntidadePaginada } from './contrato/IDataEntidadePaginada';
import { DialogService } from '../dialogs/confirma-dialog/service/dialog.service';
import { IDataBarBindService } from './contrato/IDataBarService';
import { EStatus } from './enum/estatus';
import { ErrorDialogService } from '../dialogs/error-dialog/service/error-dialog.service';

@Component({
    selector: 'data-bar',
    templateUrl: './view/data-bar.component.html',
    styleUrls: ['./view/data-bar.component.scss']
})
export class DataBarComponent<T> implements OnInit, OnDestroy {
    @Input() servicoBind: IDataBarBindService<T>;
    @Input() form: FormGroup;
    @Input() entidadePaginada: IDataEntidadePaginada<any>;
    @Input() disabled = false;
    @Input() desabilitarBotaoRemover: boolean;
    @Output() statusChanged = new EventEmitter<EStatus>();

    @ViewChild('drawer', null) drawer: MatDrawer;

    status: EStatus;
    EStatus = EStatus;
    emProgresso = false;

    constructor(
        private _dialog: DialogService,
        private _dialogErro: ErrorDialogService,
        private snackBar: MatSnackBar,
        private _elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.validarPropertsObrigatorias();
        this.setStatus(EStatus.novaPesquisa);
        this.setProgresso(false);
        this._submeterFormularioOnEnter();
    }

    ngOnDestroy(): void {
        if (this.servicoBind.onClickEnter)
            this.servicoBind.onClickEnter.unsubscribe
    }

    @HostListener('document:click', ['$event'])
    fecharSidenav(event): void {
        if (this._elementRef.nativeElement.contains(event.target)) {
            return;
        }
        this.drawer.close();
    }

    private validarPropertsObrigatorias(): any {
        if (this.servicoBind == null) {
            throw new Error('É obrigatório ter um serviço de bind vinculado');
        }

        if (this.entidadePaginada == null) {
            throw new Error(
                'É obrigatório ter uma entidade paginada vinculada'
            );
        }
    }

    private setProgresso(progresso: boolean): any {
        if (!this.form) {
            return;
        }

        this.emProgresso = progresso;

        if (progresso) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    private openSnackBar(message: string, classe: string): void {
        this.snackBar.open(message, '', {
            duration: 3000,
            panelClass: classe
        });
    }

    private setStatus(status: EStatus): void {
        if (!status) {
            return;
        }
        this.status = status;
        this.statusChanged.emit(this.status);
    }

    private _getEntidade(): T {
        const result = this.form.value as T;
        return result;
    }

    private _submeterFormularioOnEnter(): void {
        if (!this.servicoBind.onClickEnter)
            return;

        this.servicoBind.onClickEnter.subscribe(() => {
            if (this.status === EStatus.novaPesquisa) {
                this.pesquisar();
            }

            if (this.form.invalid) {
                return;
            }

            if (
                this.status === EStatus.editando ||
                this.status === EStatus.inserindo
            ) {
                this.salvar();
            }
        });
    }

    novaPesquisa(): void {
        this.setStatus(EStatus.novaPesquisa);
        this.form.enable();
        this.form.reset();
        this.entidadePaginada.entidade = this.form.value;
        this.entidadePaginada.posicao = 0;
        this.entidadePaginada.total = 0;
    }

    pesquisar(): void {
        this.setStatus(EStatus.pesquisando);
        this.entidadePaginada.entidade = this._getEntidade();
        this._paginar();
        this.drawer.close();
    }

    inserir(): void {
        this.setStatus(EStatus.inserindo);
        this.form.enable();
        this.form.reset();
        this.drawer.close();
    }

    editar(): void {
        this.setStatus(EStatus.editando);
        this.form.enable();
        this.drawer.close();
    }

    remover(): void {
        this.setStatus(EStatus.removendo);
        this._exibirDialogConfirmacao();
        this.drawer.close();
    }

    salvar(): void {
        switch (this.status) {
            case EStatus.inserindo:
                this.setProgresso(true);
                this.servicoBind.criar().subscribe(
                    success => {
                        this.setProgresso(false);

                        this.openSnackBar(
                            'Registro salvo com sucesso!',
                            'sucesso'
                        );

                        this.form.setValue(success);

                        this.setStatus(EStatus.dadosCarregados);

                        this.form.disable();

                        this.drawer.close();
                    },
                    error => this.setProgresso(false)
                );
                break;

            case EStatus.editando:
                this.setProgresso(true);
                this.servicoBind.editar().subscribe(
                    success => {
                        this.setProgresso(false);

                        this.openSnackBar(
                            'Registro editado com sucesso!',
                            'sucesso'
                        );

                        this.form.setValue(success);

                        this.setStatus(EStatus.dadosCarregados);

                        this.form.disable();

                        this.drawer.close();
                    },
                    error => this.setProgresso(false)
                );
                break;
        }
    }

    private _acaoCloseDialogConfirmacao(): void {
        this._dialog.emProgresso = false;
        this._dialog.closeDialog();
        this.setStatus(EStatus.dadosCarregados);
    }

    private _exibirDialogConfirmacao(): void {
        this._dialog.acaoMensagem = 'Removendo registro...';
        this._dialog.acaoOk = () =>
            this.servicoBind.remover().subscribe(
                success => {
                    this._dialog.closeDialog();
                    this._resetForm();
                    this.setStatus(EStatus.novaPesquisa);
                    this._dialog.emProgresso = false;
                    this.openSnackBar('Removido com sucesso', 'sucesso');
                },
                error => {
                    this._acaoCloseDialogConfirmacao();
                }
            );
        this._dialog.acaoCancelar = () => {
            this._acaoCloseDialogConfirmacao();
        };

        this._dialog.openDialog(
            'Atenção',
            'Você realmente deseja excluir este registro?'
        );
    }

    private _paginar(acao?: string): void {
        this.setStatus(EStatus.pesquisando);

        if (this.entidadePaginada.entidade == null) {
            this.entidadePaginada.entidade = this._getEntidade();
        }

        switch (acao) {
            case 'primeiro':
                this.entidadePaginada.posicao = 1;
                break;
            case 'ultimo':
                this.entidadePaginada.posicao = this.entidadePaginada.total;
                break;
            case 'proximo':
                this.entidadePaginada.posicao++;
                break;
            case 'anterior':
                this.entidadePaginada.posicao--;
                break;
            default:
                this.entidadePaginada.posicao = 0;
                break;
        }

        this.setProgresso(true);

        this.servicoBind.listarPaginacao(this.entidadePaginada).subscribe(
            success => {
                this.setProgresso(false);

                if (success == null) {
                    this._dialogErro.openDialog(
                        'Atenção',
                        'Nenhum registro foi encontrado!'
                    );
                    return;
                }

                if (success.entidade == null) {
                    this._resetForm();
                    return;
                }

                this.setStatus(EStatus.dadosCarregados);

                if (!this.entidadePaginada.entidade) {
                    this.entidadePaginada = success;
                } else {
                    this.entidadePaginada.total = success.total;
                    this.entidadePaginada.posicao = success.posicao;
                }

                this.form.setValue(success.entidade);

                this.setProgresso(false);

                this.form.disable();
            },
            error => {
                this.setStatus(EStatus.novaPesquisa);
                this.setProgresso(false);
            }
        );
    }

    proximo(): void {
        this._paginar('proximo');
    }

    anterior(): void {
        this._paginar('anterior');
    }

    ultimo(): void {
        this._paginar('ultimo');
    }

    primeiro(): void {
        this._paginar('primeiro');
    }

    private _resetForm(): void {
        this.form.reset();
        this.entidadePaginada.entidade = null;
        this.entidadePaginada.posicao = 0;
        this.entidadePaginada.total = 0;
    }
}