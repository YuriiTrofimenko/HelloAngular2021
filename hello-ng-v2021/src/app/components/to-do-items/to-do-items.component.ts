import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  toDoItems: ToDoItem[] = [
    {
      id: 1,
      isComplete: false,
      name: 'Выполнить ДЗ №2'
    },
    {
      id: 2,
      isComplete: false,
      name: 'Купить хлеб'
    },
    {
      id: 3,
      isComplete: false,
      name: 'Зарядить телефон'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
