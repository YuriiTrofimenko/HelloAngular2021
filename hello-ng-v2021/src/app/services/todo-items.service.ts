import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoItem} from "../models/ToDoItem";
import {ITEMS} from "../items";

// по умолчанию создается один экземпляр этой службы,
// и по требованию внедряется в любой класс;
// можно вместо root указать имя модуля,
// вне которого внедрение будет недоступно
@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  constructor(private http: HttpClient) { }

  getItems(): ToDoItem[] {
    return ITEMS;
  }

  /* getRemoteItems(): Observable<any> {
    return this.http.get(baseUrl);
  } */
}
