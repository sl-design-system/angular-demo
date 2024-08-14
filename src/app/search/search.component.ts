import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
// import { FormsModule } from '@sl-design-system/angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.search.emit(this.searchForm.value.query ?? '')
  }
}
