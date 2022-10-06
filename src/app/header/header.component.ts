import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string
  home_page:boolean = true

  constructor() {
    this.title = "Todo List App"
  }

  ngOnInit(): void {
  }

}
