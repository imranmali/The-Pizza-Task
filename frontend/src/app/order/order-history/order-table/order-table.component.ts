import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input()
  orderItems: any;

  displayedColumns: Array<string> = ['title','customerName','itemQuantity','totalEuro','totalUsd','orderDate'];

  constructor() {}

  ngOnInit() {
    console.log('OrderTableComponent this.orderItems:'+JSON.stringify(this.orderItems));
  }

}
