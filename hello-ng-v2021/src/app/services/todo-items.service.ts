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

  constructor(private http: HttpClient, public commonService: CommonService) {
    /* switch (environment.mode) {
      case "demo":
        this.baseApiUrl = environment.demo.apiUrl
        break
      case "full":
        this.baseApiUrl = environment.full.apiUrl
    } */
    this.baseApiUrl = environment[environment.mode].apiUrl
  }

  getItems(): ToDoItem[] {
    return ITEMS
  }

  getRemoteItems(): Observable<any> {
    this.commonService.setIsLoading(true)
    setTimeout(() => {
      this.commonService.setIsLoading(false)
    }, 6000)
    return this.http.get(`${this.baseApiUrl}/todos`)
      .pipe(delay(6000));
  }
}
