import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order.model';
import { tap, map, filter } from 'rxjs/operators';
import { CheckoutModel } from './checkout.model';
import { environment } from 'src/environments/environment';
import { OrderHistory } from './order-history/order-history.model';
import { Item } from '../item/item.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  readonly serviceAction:string = 'order';
orders:OrderHistory[];
  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get<OrderHistory[]>(
      environment.baseUrl+ this.serviceAction +'/all'
    ).pipe(
      tap((receivedData: OrderHistory[]) => { this.orders = receivedData })
    );
  }

  placeOrder(data: CheckoutModel) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.httpClient.post<any>(
      environment.baseUrl + this.serviceAction +'/', data, options
    )
  }

  getOrderById(orderId: number) {
    return this.httpClient.put<Order>(
      environment.baseUrl + this.serviceAction + '/', orderId
    ).pipe(
      tap((receivedData: Order) => { receivedData })
    );
  }

}
