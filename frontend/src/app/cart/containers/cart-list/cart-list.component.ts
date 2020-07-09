import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, withLatestFrom } from 'rxjs/operators';

import { Item } from '../../../item/item.model';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CartItem } from '../../cart.model';
import { CartService } from '../../cart.service';
import { NumberPickerDialogComponent } from './../../../shared/components/number-picker-dialog/number-picker-dialog.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  dataSource$: Array<CartItem>;
  total$;
  loadingDialogRef: MatDialogRef<LoadingComponent>;
  ngUnsubscribe$ = new Subject();

  constructor(private cartDataService: CartService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource$ = this.cartDataService.selectItems$;
    this.total$ = this.cartDataService.getSelectTotal();
   
  }

  ngOnDestroy() {
  }

  onDelete(id) {
    const dialog = this.dialog.open(DialogComponent, {
      data: {
        message: 'Are you sure you want to remove this item?',
        isConfirm: true
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.cartDataService.removeProduct(id);
        this.ngOnInit();
      }
    });
  }

  onQuantityChange({ id, quantity }: { id: number; quantity: number }) {
    const dialog = this.dialog.open(NumberPickerDialogComponent, {
      data: quantity
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.cartDataService.adjustQuantity(id, result);
        this.ngOnInit();
      }
    });
  }

  onCheckout() {
   
  }
}
