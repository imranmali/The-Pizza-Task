import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../item.model';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input()
  item: Item;
  @Output()
  addToCart = new EventEmitter();

  private amount: number;

  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }

  onAmountChange(amount: number) {
    this.amount = amount;
  }

  onAddToCart() {
    this.addToCart.emit({
      id: this.item.id,
      amount: this.amount
    });
  }
}
