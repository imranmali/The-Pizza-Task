import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getItems(): Observable<Item[]> {
      return this.http.get<Item[]>('http://localhost:8099/pizzaTask/api/v1/item/');
    }
}
