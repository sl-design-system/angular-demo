import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@sl-design-system/checklist';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( ) {}
}
