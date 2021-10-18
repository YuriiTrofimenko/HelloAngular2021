import { Component, OnInit } from '@angular/core'
import {ToDoItem} from '../../../models/ToDoItem'
import {TodoItemsService} from "../../../services/todo-items.service";
import {NavigationStart, Router} from "@angular/router";

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
  allowUrlProcessing: boolean = true

  constructor(
    private router: Router,
    private itemsService: TodoItemsService
  ) {
    itemsService.commonService.getIsLoadingStream().subscribe(value => {
      this.isLoading = value
    })
  }

  processUrl () {
    if (this.allowUrlProcessing) {
      this.allowUrlProcessing = false
      const hash = window.location.hash
      if (hash && this.toDoItems.length > 0) {
        const selectedItemId = Number(hash.replace('#', ''))
        const selectedItem =
          this.toDoItems.find(item => item.id === selectedItemId)
        if (selectedItem) {
          this.selectedItem = selectedItem
        } else {
          if (!this.selectedItem) {
            window.location.hash = ''
          } else {
            window.location.hash = this.selectedItem.id.toString()
          }
        }
      }
      this.allowUrlProcessing = true
    }
  }

  ngOnInit() {
    this.router.events.forEach(event => {
      // console.log(event instanceof NavigationStart)
      if (event instanceof NavigationStart) {
        this.processUrl()
      }
    })
    setTimeout(() => this.title = 'Hello Angular 2021!', 5000)
    // this.toDoItems.push(...this.service.getItems())
    this.itemsService.getRemoteItems()
      .subscribe(
        data => {
          this.toDoItems.push(
            // ...(data.map(
            ...(data.data.map(
              // todoItem => new ToDoItem(todoItem.id, todoItem.title, todoItem.completed)
              todoItem => new ToDoItem(todoItem.id, todoItem.title, todoItem.done)
            ))
          )
        },
        error => {
          console.log(error);
        },
        () => {
          this.processUrl()
        });
  }

  onItemClick (toDoItem: ToDoItem) {
    this.selectedItem = toDoItem
    // this.router.navigate(['tasks'], { fragment: toDoItem.id.toString() })
    window.location.hash = this.selectedItem.id.toString()
  }
}
