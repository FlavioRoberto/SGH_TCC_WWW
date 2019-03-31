import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';

@Component({
    selector: 'curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
    }
}
