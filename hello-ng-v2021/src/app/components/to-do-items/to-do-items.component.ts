import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../models/ToDoItem'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  toDoItem: ToDoItem = {
    id: 1,
    isComplete: false,
    name: 'Bill Gates'
  }

  constructor() { }

  ngOnInit() {
  }

}
