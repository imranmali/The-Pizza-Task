import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../../../item/item.model';
import { CartItem } from '../../cart.model';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  @Input()
  dataSource: Array<CartItem>;
  @Input()
  total: number;
  @Output()
  delete = new EventEmitter<number>();
  @Output()
  quantityChange = new EventEmitter<{
    id: number;
    quantity: number;
  }>();

  displayedColumns: Array<string> = ['title', 'quantity', 'total', 'delete'];

  constructor() {}

  ngOnInit() {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onQuantityChange(quantity: number, id: number) {
    this.quantityChange.emit({
      id,
      quantity
    });
  }
}
