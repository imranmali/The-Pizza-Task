import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { OrderListComponent } from './order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { NumberPickerDialogComponent } from 'src/app/shared/components/number-picker-dialog/number-picker-dialog.component';
import { ConvertPipe } from 'src/app/shared/pipe/convert/convert.pipe';
import { SearchBarComponent } from 'src/app/item/components/search-bar/search-bar.component';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  imports: [CommonModule, OrderRoutingModule, MaterialModule, SharedModule],
  declarations: [OrderListComponent,OrderTableComponent],
  entryComponents: [
    DialogComponent,
    LoadingComponent,
    NumberPickerDialogComponent
  ],
  providers: [ConvertPipe],

})
export class OrderModule {}
