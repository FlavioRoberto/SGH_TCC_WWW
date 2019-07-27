import { Component } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'ap-autenticacao-form',
    templateUrl: './autenticacao-form.component.html',
    styleUrls: ['./autenticacao-form.component.scss'],
    animations: fuseAnimations
})
export class AutenticacaoFormComponent {

    constructor(private _fuseConfigService: FuseConfigService) {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
