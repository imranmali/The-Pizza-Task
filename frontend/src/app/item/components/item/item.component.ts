import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input()
  item: any;
  @Output()
  add = new EventEmitter<any>();
  @Output()
  subtract = new EventEmitter<any>();

  get description() {
    return this.item.description.length > 103
      ? this.item.description.substring(0, 100) + '...'
      : this.item.description;
  }

  constructor() {
  }

  ngOnInit() {}

  addToCart() {
    this.add.emit(this.item);
  }

  removeFromCart() {
    this.subtract.emit(this.item);
  }
}
