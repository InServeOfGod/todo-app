import { Component, OnInit } from '@angular/core';
import { TodoList } from "../todo-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  get todolist(): TodoList[] {
    return this._todolist;
  }

  set todolist(value: TodoList[]) {
    this._todolist = value;
  }

  private _todolist:TodoList[]

  // todo : test section delete later
  public top_title_class = "card-header bg-primary"
  public top_title_id = "bad-id"
  public messageClasses = {
    "text-success": true,
    "text-danger": false,
    "bg-dark": true,
  }
  public error = true
  // end

  constructor() {
    // todo : test data delete later
    let todolist1:TodoList = {
      id: 1,
      event: 'create project',
      date: new Date().toLocaleString(),
      done: true
    }

    let todolist2:TodoList = {
      id: 2,
      event: 'create list',
      date: new Date().toLocaleString(),
      done: false
    }

    this._todolist = []
    this._todolist = [todolist1, todolist2]
  }

  ngOnInit(): void {

  }
}
