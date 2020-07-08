import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from '../shared/components/loading/loading.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
  exports: [ShellComponent],
  declarations: [HeaderComponent, ShellComponent],
  entryComponents: [LoadingComponent]
})
export class CoreModule {}
