import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as portugues } from './../i18n/pt-br';

@Component({
    selector: 'disciplinaMenu',
    templateUrl: './view/disciplina-menu.component.html',
    styleUrls: ['./view/disciplina-menu.component.scss']
})
export class DisciplinaMenuComponent {
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(portugues);
    }
}
