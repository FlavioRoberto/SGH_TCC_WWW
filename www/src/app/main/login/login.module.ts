import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { LoginRoutingModule } from './login.routes.module';
import { LoginComponent } from './login.component';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { LoginService } from './services/login.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CompartilhadoModule,
        MaterialCoreModule,
        TranslateModule,
        FuseSharedModule,
        LoginRoutingModule],
    providers: [LoginService]
})
export class LoginModule { }
