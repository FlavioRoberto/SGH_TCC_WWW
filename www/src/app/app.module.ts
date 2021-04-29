import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule
} from '@fuse/components';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/shared/layout/layout.module';
import { MainModule } from './main/main.module';
import { NgxMaskModule } from 'ngx-mask';
import { fuseConfig } from './shared/config/fuse-config';

const routes = [
    {
        path: '**',
        redirectTo: 'inicio'
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        TranslateModule.forRoot(),
        NgxMaskModule.forRoot(),
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // App modules
        LayoutModule,
        MainModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
