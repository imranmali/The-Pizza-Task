import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { ItemService } from '../../item.service';
import { ItemDetailWrapperComponent } from '../item-detail-wrapper/item-detail-wrapper.component';
import { Item } from '../../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items$: Observable<Item>;
  loading$: Observable<boolean>;
  search = new FormControl();
  loadingSubscription: Subscription;
  loadingDialogRef: MatDialogRef<LoadingComponent>;

  constructor(
    private itemService: ItemService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();

  }

  ngOnDestroy() {
  }

  onAddToCart(item: any) {
  }

  onRemoveFromCart(item: any) {
  }

  onSearch(text: string) {
    this.items$ = this.itemService.getItemByKeyword(
      text.toLowerCase()
    );
    
  }

  onShowItemDetail(selectedItem: Item) {
    this.items$
    .pipe(take(1))
    .subscribe(item => {
      const dialogRef = this.dialog.open(ItemDetailWrapperComponent, {
        data: selectedItem,
        width: '80%',
        height: '90%'
      });

      dialogRef.afterClosed().subscribe(result => {
        
      });
    });
  }
}
