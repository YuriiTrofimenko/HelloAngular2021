import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'
import {TodoItemsService} from "../../services/todo-items.service";
import {CommonService} from "../../services/common.service"

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  selectedItem: ToDoItem = null

  toDoItems: ToDoItem[] = []

  title: string = ''

  isLoading: boolean

  constructor(private itemsService: TodoItemsService) {
    itemsService.commonService.getIsLoadingStream().subscribe(value => {
      this.isLoading = value
    })
  }

  ngOnInit() {
    setTimeout(() => this.title = 'Hello Angular 2021!', 5000)
    // this.toDoItems.push(...this.service.getItems())
    this.itemsService.getRemoteItems()
      .subscribe(
        data => {
          this.toDoItems.push(
            ...(data.map(
              todoItem => new ToDoItem(todoItem.id, todoItem.title, todoItem.completed)
            ))
          )
        },
        error => {
          console.log(error);
        });
  }

  onItemClick (toDoItem: ToDoItem) {
    this.selectedItem = toDoItem
  }

}
