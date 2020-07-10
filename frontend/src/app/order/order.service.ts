import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order.model';
import { tap, map, filter } from 'rxjs/operators';
import { CheckoutModel } from './checkout.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get<Order>(
      'http://localhost:8099/pizzaTask/api/v1/order/all'
    ).pipe(
      tap((receivedData: Order) => { receivedData })
    );
  }

  placeOrder(order: CheckoutModel) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.httpClient.post<any>(
      'http://localhost:8099/pizzaTask/api/v1/order/', order, options
    )
  }

  getOrderById(orderId: number) {
    return this.httpClient.put<Order>(
      'http://localhost:8099/pizzaTask/api/v1/order/', orderId
    ).pipe(
      tap((receivedData: Order) => { receivedData })
    );
  }
}
