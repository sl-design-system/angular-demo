import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {FormsModule} from "@sl-design-system/angular";
import { FormsModule as CoreFormsModule } from '@sl-design-system/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ReactiveFormsModule, CoreFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  query = '';
  results = Array.from(Array(5)).map((_, i) => i );

  search(searchForm:{query:string}) {
    this.query = searchForm.query;
  }

  formGroup = new FormGroup({
    textField: new FormControl('Text field'),
    checkbox: new FormControl('checked'),
    select: new FormControl('1'),
    checkboxGroup: new FormControl(['2', '1', '0']),
    radioGroup: new FormControl('1')
  });
}
