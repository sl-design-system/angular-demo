import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {AvatarComponent} from '@sl-design-system/angular/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, SearchComponent,  AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  query = '';
  results = Array.from(Array(5)).map((_, i) => i );
  constructor(
    private ref: ChangeDetectorRef
  ) {}
  search(query: string) {
    console.log('this.search', query);
    this.query = query;
  }
}
