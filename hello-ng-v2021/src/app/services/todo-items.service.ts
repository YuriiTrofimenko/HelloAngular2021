import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoItem} from "../models/ToDoItem";
import {ITEMS} from "../items";
import {environment} from "../../environments/environment";
import {CommonService} from './common.service'
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";


// по умолчанию создается один экземпляр этой службы,
// и по требованию внедряется в любой класс;
// можно вместо root указать имя модуля,
// вне которого внедрение будет недоступно
@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  private baseApiUrl
  private todoItemsEndpoint
  private currentTodoItem: ToDoItem = null

  constructor(private http: HttpClient, public commonService: CommonService) {
    /* switch (environment.mode) {
      case "demo":
        this.baseApiUrl = environment.demo.apiUrl
        break
      case "full":
        this.baseApiUrl = environment.full.apiUrl
    } */
    const env = environment[environment.mode]
    this.baseApiUrl = env.apiUrl
    this.todoItemsEndpoint = env.todoItemsEndpoint
  }

  setCurrentItem (item: ToDoItem) {
    this.currentTodoItem = item
  }

  getCurrentItem () {
    return this.currentTodoItem
  }

  getItems(): ToDoItem[] {
    return ITEMS
  }

  getRemoteItems(): Observable<any> {
    this.commonService.setIsLoading(true)
    setTimeout(() => {
      this.commonService.setIsLoading(false)
    }, 6000)
    return this.http.get(`${this.baseApiUrl}${this.todoItemsEndpoint}`)
      .pipe(delay(6000));
  }

  updateRemoteItem(): void {
    this.commonService.setIsLoading(true)
    /* setTimeout(() => {
      this.commonService.setIsLoading(false)
    }, 6000) */
    this.http.put(
      `${this.baseApiUrl}${this.todoItemsEndpoint}/${this.currentTodoItem.id}`,
      {
        'title': this.currentTodoItem.name,
        'done': this.currentTodoItem.isComplete
      }
    ).subscribe(
      value => {},
      error => console.log(error),
      () => this.commonService.setIsLoading(false)
    );
  }
}
