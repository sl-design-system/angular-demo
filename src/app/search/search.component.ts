import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { TextFieldComponent } from '@sl-design-system/angular/text-field';
import { ButtonComponent } from '@sl-design-system/angular/button';
import { FormComponent } from '@sl-design-system/angular/form';
import { TextFieldDirective } from '@sl-design-system/angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TextFieldComponent,
    ButtonComponent,
    FormComponent,
    TextFieldDirective
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.search.emit(this.searchForm.value.query ?? '');
  }
}
