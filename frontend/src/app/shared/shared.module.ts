import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';

import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NumberPickerDialogComponent } from './components/number-picker-dialog/number-picker-dialog.component';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { CustomerInfoComponent } from '../cart/components/customer-info/customer-info.component';
import { ConvertPipe } from './pipe/convert/convert.pipe';
import { SearchBarComponent } from '../item/components/search-bar/search-bar.component';

@NgModule({
  imports: [CommonModule, MaterialModule, SlideshowModule, FormsModule,ReactiveFormsModule],
  declarations: [
    NumberPickerComponent,
    DialogComponent,
    LoadingComponent,
    NumberPickerDialogComponent,
    CustomerInfoComponent,
    ConvertPipe,
    SearchBarComponent
  ],
  exports: [NumberPickerComponent,ConvertPipe,SearchBarComponent]
})
export class SharedModule {}
