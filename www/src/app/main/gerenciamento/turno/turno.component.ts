import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';

@Component({
    selector: 'turno',
    templateUrl: './turno.component.html',
    styleUrls: ['./turno.component.scss']
})
export class TurnoComponent {
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
    }
}
