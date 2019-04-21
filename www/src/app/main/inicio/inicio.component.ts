import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './i18n/pt-br';

@Component({
    selector: 'inicio',
    templateUrl: './view/inicio.component.html',
    styleUrls: ['./view/inicio.component.scss']
})
export class InicioComponent {
    dataHora: String = new Date().toLocaleString('pt-Br');
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
    }
}
