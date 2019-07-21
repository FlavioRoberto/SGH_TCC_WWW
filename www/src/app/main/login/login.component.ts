import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ILogin } from './models/ilogin';
import { LoginService } from './services/login.service';
import { AutenticacaoService } from '@compartilhado/core/auth/autenticacao.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './view/login.component.html',
    styleUrls: ['./view/login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    emProgresso = false;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _servico: LoginService,
        private _router: Router,
        private _autenticacaoServico: AutenticacaoService
    ) {
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

    autenticar(): void {
        const dados = this.loginForm.value as ILogin;
        this.emProgresso = true;
        this._servico.autenticar(dados).subscribe(success => {
            this._autenticacaoServico.setToken(success);
            this._router.navigate(['/inicio']);
        }, error => {
            console.log(error);
            this.emProgresso = false;
        });
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            login: ['', [Validators.required]],
            senha: ['', Validators.required]
        });
    }
}
