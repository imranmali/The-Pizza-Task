import { Item } from '../item/item.model';

export interface CartItem {
  item: Item;
  quantity: number;
  total: number;
}

export function createCartItem(params: Partial<CartItem>) {
  return {
    total: 0,
    quantity: 1,
    ...params
  } as CartItem;
}
