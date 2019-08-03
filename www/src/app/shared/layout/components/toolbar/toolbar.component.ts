import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { IUsuario } from '@compartilhado/core/usuario/model/IUsuario.model';
import { AutenticacaoService } from '@compartilhado/core/auth/autenticacao.service';
import { navigation } from 'app/shared/navigation/navigation';
import { AlterarSenhaDialogService } from '../dialogs/redefinir-senha-dialog/service/alterar-senha-dialog.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    usuario: IUsuario;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _authService: AutenticacaoService,
        private _alterarSenhaDialogService: AlterarSenhaDialogService) {

        this.navigation = navigation;

        this._unsubscribeAll = new Subject();

        this.usuario = _authService.getUsuario();
    }


    ngOnInit(): void {
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(settings => {
                this.horizontalNavbar =
                    settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        this.selectedLanguage = _.find(this.languages, {
            id: this._translateService.currentLang
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    logout(): void {
        this._authService.logout();
    }

    alterarSenha(): void {
        this._alterarSenhaDialogService.openDialog();
    }

}
