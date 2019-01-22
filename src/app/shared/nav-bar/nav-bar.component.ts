import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/nav-item.model';

const NAV_ITEM_LIST = [
  new NavItem("Home", "home"),
  new NavItem("Market", "market", true),
  new NavItem("About", "about"),
  new NavItem("Admin", "admin")
]

@Component({
  selector: 'app-navbar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public navItemsList: NavItem[] = [];

  constructor() {
    this.navItemsList.push(...NAV_ITEM_LIST);
  }

  ngOnInit() {
  }
}
