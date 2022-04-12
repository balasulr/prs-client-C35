import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
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
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("About", "/about"),
    new Menu("Login", "/login")
  ]

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
  }

}
