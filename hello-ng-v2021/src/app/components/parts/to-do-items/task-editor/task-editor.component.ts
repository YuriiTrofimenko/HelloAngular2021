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

  @Input()
  resetSelectedItem: () => void

  constructor(private todoItemsService: TodoItemsService) { }

  ngOnInit() {
  }

  handleCancelButtonClick () {
    this.resetSelectedItem()
  }

  handleSaveButtonClick () {
    this.todoItemsService.updateRemoteItem(this.selectedItem, this.resetSelectedItem.bind(this))
  }
}
