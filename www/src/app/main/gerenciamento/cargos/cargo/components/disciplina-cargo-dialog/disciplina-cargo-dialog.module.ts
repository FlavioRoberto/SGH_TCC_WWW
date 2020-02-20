import { NgModule } from '@angular/core';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { DisciplinaCargoDialogComponent } from './disciplina-cargo-dialog.component';
import { DisciplinaCargoDialogService } from './services/disciplina-cargo-dialog.service';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    declarations: [DisciplinaCargoDialogComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
    ],
    entryComponents: [DisciplinaCargoDialogComponent],
    providers: [
        DisciplinaCargoDialogService
    ]
})
export class DisciplinaCargoDialogModule { }
