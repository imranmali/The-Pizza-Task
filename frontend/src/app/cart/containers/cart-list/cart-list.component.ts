import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, of } from 'rxjs';
import { filter, takeUntil, withLatestFrom, take } from 'rxjs/operators';

import { Item } from '../../../item/item.model';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CartItem } from '../../cart.model';
import { CartService } from '../../cart.service';
import { NumberPickerDialogComponent } from './../../../shared/components/number-picker-dialog/number-picker-dialog.component';
import { ItemDetailWrapperComponent } from 'src/app/item/containers/item-detail-wrapper/item-detail-wrapper.component';
import { CustomerInfoComponent } from '../../components/customer-info/customer-info.component';
import { OrderService } from 'src/app/order/order.service';
import { Order } from 'src/app/order/order.model';
import { CheckoutModel } from 'src/app/order/checkout.model';
import {MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  dataSource$: Array<CartItem>;
  total$;

  constructor(private cartDataService: CartService,
    private dialog: MatDialog,
    private orderService: OrderService,
    private snackBar: MatSnackBar) { 

     

    }

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

    of(this.dataSource$)
      .pipe(take(1))
      .subscribe(item => {
        const dialogRef = this.dialog.open(CustomerInfoComponent, {
          width: '30%',
          height: '80%'
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result)
            this.onAddToCart(result);
          //this.cartService.addToCart(result.id, result.amount);
        });
      });

  }
  onAddToCart(result: any) {

    let order = <CheckoutModel>{};
    order.itemIdsAndQuantities = {};
    order.customer = result;

    this.dataSource$.forEach(function (item) {
      order.itemIdsAndQuantities[item.item.id] = item.quantity;
    });
    this.orderService.placeOrder(order).subscribe(
      data => {
        if (data && data.id){
          //empty cart
          this.cartDataService.selectItems$ = [];
          this.ngOnInit();
          this.snackBar.open("Your order has been placed successfull Order Number: "+ data.id, 'Order Sucess', {
            duration: 3000,
         });
          
        }

      }

    );

  }
}
