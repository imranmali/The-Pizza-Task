import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemComponent } from './components/item/item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ItemDetailWrapperComponent } from './containers/item-detail-wrapper/item-detail-wrapper.component';
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SlideshowModule
  ],
  declarations: [
    ItemListComponent,
    ItemComponent,
    SearchBarComponent,
    ItemDetailComponent,
    ItemDetailWrapperComponent
  ],
  entryComponents: [ItemDetailWrapperComponent]
})
export class ItemModule {}
