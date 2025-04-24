import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AvatarComponent} from '@sl-design-system/angular/avatar';
import { TabComponent, TabGroupComponent } from '@sl-design-system/angular/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, SearchComponent, AvatarComponent, TabComponent, TabGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  query = '';

  results = Array.from(Array(5)).map((_, i) => i);

  tabs = [
    {path: '/home', label: 'Home'},
    {path: '/form', label: 'Form'},
    {path: '/icons', label: 'Icons'},
    {path: '/menu', label: 'Menu'},
    {path: '/dashboard', label: 'Dashboard'},
    {path: '/assignments', label: 'Assignments'},
    {path: '/grades', label: 'Grades'},
    {path: '/settings', label: 'Settings'}
  ];

  constructor(private ref: ChangeDetectorRef) {}

  search(query: string) {
    this.query = query;
  }

  onTabChange(event: any) {
    event.target.children[event.detail].click();
  }
}
