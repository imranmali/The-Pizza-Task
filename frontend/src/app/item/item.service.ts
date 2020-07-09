import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import { tap, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: any;

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<Item>(
      'http://localhost:8099/pizzaTask/api/v1/item/'
    ).pipe(
      tap((receivedData: Item) => { this.items = <Item>receivedData })
    );
  }

  getItemByKeyword(value: string) {

    return of(this.items)
      .pipe(
        map(item =>
          item.filter(
            item =>
              item.title.toLowerCase().includes(value) ||
              item.description.toLowerCase().includes(value) ||
              item.category.name.toLowerCase().includes(value)
          )
        )
      );


  }

  //  return  EMPTY;
  // }

  getItemById(itemId: number) {
    return EMPTY;
  }
}
