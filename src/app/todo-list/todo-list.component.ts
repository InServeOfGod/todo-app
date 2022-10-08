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

  addEvent(event: any, done: any) {
    let todoList:TodoList = {
      id: Math.floor(Math.random() * 10000),
      event: event.value,
      date: new Date().toLocaleString(),
      done: done.checked
    }

    this._todolist.push(todoList)
  }

  ngOnInit(): void {

  }
}
