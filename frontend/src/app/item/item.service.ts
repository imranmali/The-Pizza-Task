import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private httpClient: HttpClient) { }


  getItems() {
    return this.httpClient.get("http://localhost:8099/pizzaTask/api/v1/item/");
  }

  getItemByKeyword(value: string) {
    return this.httpClient.get<Item>(
      'http://localhost:8099/pizzaTask/api/v1/item/'
    ).pipe(
      tap((receivedData: Item) => receivedData)
    );
  }

  getItemById(itemId: number) {
    return EMPTY;
  }
}
