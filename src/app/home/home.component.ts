import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import '@sl-design-system/checklist';
import {TabComponent, TabGroupComponent} from "@sl-design-system/angular/tabs";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TabGroupComponent,
    TabComponent,
    RouterLink,
    NgForOf,
    RouterOutlet
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabs = [
    { path: '/form', label: 'form' },
    { path: '/icons', label: 'icons' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/assignments', label: 'Assignments' },
    { path: '/grades', label: 'Grades' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/resources', label: 'Resources' },
    { path: '/announcements', label: 'Announcements' },
    { path: '/profile', label: 'Profile' },
    { path: '/settings', label: 'Settings' },
    { path: '/support', label: 'Support' },
    { path: '/form', label: 'form' },
    { path: '/icons', label: 'icons' }
  ];

  constructor( ) {}

  ngOnInit() {
    console.log('tabs in ngOnInit', this.tabs);
  }
}
