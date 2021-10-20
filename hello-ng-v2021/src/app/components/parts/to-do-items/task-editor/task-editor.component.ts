import {Component, Input, OnInit} from '@angular/core';
import {ToDoItem} from "../../../../models/ToDoItem";
import {TodoItemsService} from "../../../../services/todo-items.service";

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  @Input()
  selectedItem: ToDoItem = null

  constructor(private todoItemsService: TodoItemsService) { }

  ngOnInit() {
  }

  handleSaveButtonClick () {
    this.todoItemsService.updateRemoteItem(this.selectedItem)
  }
}
