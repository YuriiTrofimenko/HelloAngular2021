import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  selectedItem: ToDoItem = null

  toDoItems: ToDoItem[] = [
    {
      id: 1,
      isComplete: false,
      name: 'Выполнить ДЗ №2'
    },
    {
      id: 2,
      isComplete: false,
      name: 'Купить хлеб. Dhbdjnfknk dhkgmfnkgm dgbnfnfg gfnfmlhmlg,l,hjmlj,nl ngmhlmnlh. Hcnkdsvmksvm fnfkbnkdfbn.'
    },
    {
      id: 3,
      isComplete: false,
      name: 'Зарядить телефон'
    },
    {
      id: 4,
      isComplete: true,
      name: 'Task #4. qqqqqqqqqqqqqqz'
    },
    {
      id: 5,
      isComplete: true,
      name: 'Task #5. qqqqqqqqqqqqqqzz'
    },
    {
      id: 6,
      isComplete: false,
      name: 'Task #6. qqqqqqqqqqqqqqzzz'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onItemClick (toDoItem: ToDoItem) {
    this.selectedItem = toDoItem
  }

}
