import {Component, Input, OnInit} from '@angular/core';
import {ToDoItem} from "../../../../models/ToDoItem";

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  @Input()
  selectedItem: ToDoItem = null

  constructor() { }

  ngOnInit() {
  }

}
