import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Array of menu.class.ts data with every item in the
  // array representing a single item in the menu
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/user/list"),
    new Menu("About", "/about")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
