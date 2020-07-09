import { Injectable } from '@angular/core';
import { map, publishReplay, refCount } from 'rxjs/operators';

import { Item } from '../item/item.model';
import { CartItem, createCartItem } from './cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectItems$: Array<CartItem> = new Array();

  constructor() { }

  getSelectTotal() {
    return this.selectItems$.reduce((acc, cur) => acc + (cur.quantity * cur.item.price), 0);
  }

  removeProduct(id: number) {
    this.selectItems$ = this.selectItems$.filter(item => item.item.id !== id);
  }

  adjustQuantity(id: Item['id'], quantity: number) {
    this.selectItems$ = this.selectItems$.map(item => {
      if (item.item.id == id) {
        item.quantity = quantity;
        item.total = item.item.price * quantity
      }
      return item;
    });

  }

  confirmOrder(items: Array<CartItem>) {
  }

  resetErrorMessage() {
  }

  addToCart(item, quantity) {
    this.removeProduct(item.id);
    let total: number = item.price * quantity;
    let careItem: CartItem = createCartItem({ item, quantity, total });
    this.selectItems$.push(careItem);

  }

  getItems() {
    return this.selectItems$;
  }

  clearCart() {
    this.selectItems$ = [];
    return this.selectItems$;
  }


}
