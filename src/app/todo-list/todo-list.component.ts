import { Component, OnInit } from '@angular/core';
import { TodoList } from "../todo-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private readonly item_name:string
  public filtered_list:TodoList[]
  private _todolist:TodoList[]

  constructor() {
    this.item_name = "todolist"
    this._todolist = []
    this.filtered_list = []
  }

  private renewStorage() {
    localStorage.setItem(this.item_name, JSON.stringify(this._todolist))
  }

  public revert(event:any, done:any) {
    event.value = null
    done.checked = false
  }

  public reload() {
    let storage = localStorage.getItem(this.item_name)

    if (storage === null) {
      this.renewStorage()
    } else {
      this._todolist = JSON.parse(storage)
      this.filtered_list = this._todolist
    }
  }

  public filter(field:string) {
    this.filtered_list = this._todolist.filter((value, index, array) => {
      return value.event.includes(field)
    })
  }

  public create(event: any, done: any) {
    let todoList:TodoList = {
      id: Math.floor(Math.random() * 10000),
      event: event.value,
      date: new Date().toLocaleString(),
      done: done.checked
    }

    this.revert(event, done)
    this._todolist.push(todoList)
    this.renewStorage()
  }

  public update() {
    // todo : make edit work
    // this.renewStorage()
  }

  public show(id:number) {
    let item = this._todolist.find(value => {
      return (value.id === id)
    })

    window.alert(JSON.stringify(item))
  }

  public delete(id:number) {
    if (window.confirm("Are you sure you want to delete this item from list?")) {
      this._todolist.find((value, index, obj) => {
        if (value.id === id) {
          obj.splice(index)
        }
      })

      this.renewStorage()
    }
  }

  ngOnInit(): void {
    // Initialize localstorage
    this.reload()
  }
}
