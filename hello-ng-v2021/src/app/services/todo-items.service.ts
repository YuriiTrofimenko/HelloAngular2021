import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoItem} from "../models/ToDoItem";
import {ITEMS} from "../items";
import {environment} from "../../environments/environment";
import {CommonService} from './common.service'
import {Observable, of} from "rxjs";
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
  private toDoItems: ToDoItem[] = []

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

  getItems(): ToDoItem[] {
    return ITEMS
  }

  get remoteItems () {
    return this.toDoItems
  }

  getRemoteItems(callback: () => void = null) {
    this.commonService.setIsLoading(true)
    this.http.get(`${this.baseApiUrl}${this.todoItemsEndpoint}`)
      .subscribe(
        (data: ToDoItem) => {
          this.toDoItems.length = 0
          this.toDoItems.push(
            ...(data['data'].map(
              todoItem => new ToDoItem(todoItem.id, todoItem.title, todoItem.done)
            ))
          )
        },
        error => {
          console.log(error);
        },
        () => {
          this.commonService.setIsLoading(false)
          if (callback) callback()
        })
  }

  updateRemoteItem(item: ToDoItem): void {
    this.commonService.setIsLoading(true)
    this.http.put(
      `${this.baseApiUrl}${this.todoItemsEndpoint}/${item.id}`,
      {
        'title': item.name,
        'done': item.isComplete
      }
    ).subscribe(
      value => {},
      error => console.log(error),
      () => {
        this.commonService.setIsLoading(false)
        this.getRemoteItems()
      }
    );
  }
}
