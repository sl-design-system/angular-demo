import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();

  searchForm = new FormGroup({
    query: new FormControl('')
  })

  onSubmit() {
    this.search.emit(this.searchForm.value)
  }
}
