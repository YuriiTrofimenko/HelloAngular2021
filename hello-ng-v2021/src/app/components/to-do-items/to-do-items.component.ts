import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'
import {TodoItemsService} from "../../services/todo-items.service";

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  selectedItem: ToDoItem = null

  toDoItems: ToDoItem[] = []

  constructor(private service: TodoItemsService) { }

  ngOnInit() {
    this.toDoItems.push(...this.service.getItems())
  }

  onItemClick (toDoItem: ToDoItem) {
    this.selectedItem = toDoItem
  }

}
