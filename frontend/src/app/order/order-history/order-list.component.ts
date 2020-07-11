import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, of } from 'rxjs';
import { filter, takeUntil, withLatestFrom, take } from 'rxjs/operators';

import { OrderService } from 'src/app/order/order.service';
import { Order } from 'src/app/order/order.model';
import { CheckoutModel } from 'src/app/order/checkout.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConvertPipe } from 'src/app/shared/pipe/convert/convert.pipe';
import { CartItem } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { NumberPickerDialogComponent } from 'src/app/shared/components/number-picker-dialog/number-picker-dialog.component';
import { CustomerInfoComponent } from 'src/app/cart/components/customer-info/customer-info.component';
import { OrderHistory } from './order-history.model';


@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  orderItems: OrderHistory[];

  constructor(private cartDataService: CartService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orderItems = data;
    });
  }

  ngOnDestroy() {
  }


}
