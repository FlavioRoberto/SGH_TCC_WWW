import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from '../i18n/pt-br';
import { IDataBarBind } from 'app/layout/components/databar/contrato/IDataBarBind';
import { ITurno } from './model/turno.interface';
import { TurnoService } from './service/turno.service';

@Component({
    selector: 'turno',
    templateUrl: './view/turno.component.html',
    styleUrls: ['./view/turno.component.scss']
})
export class TurnoComponent implements IDataBarBind<ITurno>{
    acoesViewModel: IDataBarBind<ITurno>;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _turnoService: TurnoService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
        this.acoesViewModel = this;
    }

    Criar(): void {
        console.log('opa meu consagrado...');
    }

    ListarPor(): void {
        this._turnoService
            .listarPeloCodigo(1)
            .subscribe(success => {
                console.log(success);
            }, error => {
                console.log(error);
            });
    }

}
