import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NgClass,
    RouterLink
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logout() {
    alert('You have been logged out!');

  }
  currentPage: string = 'home';

  setActive(page: string): void {
    this.currentPage = page;
  }
}
