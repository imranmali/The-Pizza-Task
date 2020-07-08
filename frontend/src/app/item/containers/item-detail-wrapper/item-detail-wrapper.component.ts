import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../item.model';


@Component({
  selector: 'app-item-detail-wrapper',
  templateUrl: './item-detail-wrapper.component.html',
  styleUrls: ['./item-detail-wrapper.component.css']
})
export class ItemDetailWrapperComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    public dialogRef: MatDialogRef<ItemDetailWrapperComponent>
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  onAddToCart(idWithAmount) {
    this.dialogRef.close(idWithAmount);
  }
}
