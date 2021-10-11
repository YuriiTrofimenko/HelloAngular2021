import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'
import { ITEMS } from '../../items'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  selectedItem: ToDoItem = null

  toDoItems: ToDoItem[] = ITEMS

  constructor() { }

  ngOnInit() {
  }

  onItemClick (toDoItem: ToDoItem) {
    this.selectedItem = toDoItem
  }

}
