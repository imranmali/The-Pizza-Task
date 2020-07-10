import { Injectable } from '@angular/core';
import { map, publishReplay, refCount } from 'rxjs/operators';

import { Item } from '../item/item.model';
import { CartItem, createCartItem } from './cart.model';
import { ItemService } from '../item/item.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectItems$: Array<CartItem> = new Array();

  constructor(private itemService: ItemService) { }

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

  addToCart(itemId, quantity) {
    let item = this.getItemById(itemId);
    this.removeProduct(itemId);
    let total: number = item.price * quantity;

    let careItem: CartItem = createCartItem({ item, quantity, total });
    this.selectItems$.push(careItem);

  }

  getItemById(id) {
    var item = this.itemService.items.filter(item =>
      item.id === id
    );
    if (item.length > 0)
      return item[0];
    else
      return {};
  }

  getItems() {
    return this.selectItems$;
  }

  clearCart() {
    this.selectItems$ = [];
    return this.selectItems$;
  }


}
