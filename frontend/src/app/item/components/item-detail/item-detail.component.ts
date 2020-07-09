import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../item.model';
import { CartService } from 'src/app/cart/cart.service';


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

  private amount: number = 1;

  constructor(private cartService:CartService) {}

  ngOnInit() {
  }

  onAmountChange(amount: number) {
    
    this.amount = amount;
  }

  onAddToCart(item) {
    this.cartService.addToCart(item,this.amount);
    
  }
}
