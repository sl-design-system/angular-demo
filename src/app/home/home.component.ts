import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import '@sl-design-system/checklist';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( ) {}
}
