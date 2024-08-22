import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import '@sl-design-system/avatar/register.js';
import '@sl-design-system/checklist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ReactiveFormsModule, FormsModule, FormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  query = '';
  results = Array.from(Array(5)).map((_, i) => i );

  @ViewChild('test') contentRef: ElementRef;

 

  constructor(
    private ref: ChangeDetectorRef
  ) {}

  

  search(query: string) {
    console.log('this.search', query);
    this.query = query;
  }
}
