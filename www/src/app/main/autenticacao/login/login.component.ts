import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ILogin } from './models/ilogin';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'app/core/auth/autenticacao.service';

@Component({
    selector: 'login',
    templateUrl: './view/login.component.html',
    styleUrls: ['./view/login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    emProgresso = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _servico: LoginService,
        private _router: Router,
        private _autenticacaoServico: AutenticacaoService
    ) { }

    autenticar(): void {
        const dados = this.loginForm.value as ILogin;
        this.emProgresso = true;
        this._servico.autenticar(dados).subscribe(success => {
            this._autenticacaoServico.setToken(success);
            this._router.navigate(['/inicio']);
        }, () => {
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
