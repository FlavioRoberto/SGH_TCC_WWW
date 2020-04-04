import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { LoginRoutingModule } from './login.routes.module';
import { LoginComponent } from './login.component';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { LoginService } from './services/login.service';
import { AutenticacaoFormModule } from '../components/autenticacao-form/autenticacao-form.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CompartilhadoModule,
        MaterialCoreModule,
        TranslateModule,
        FuseSharedModule,
        LoginRoutingModule,
        AutenticacaoFormModule],
    providers: [LoginService]
})
export class LoginModule { }
