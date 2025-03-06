import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators} from '@angular/forms';
import { ButtonComponent } from '@sl-design-system/angular/button';
import { ButtonBarComponent } from '@sl-design-system/angular/button-bar';
import { FormFieldComponent } from '@sl-design-system/angular/form';
import { CheckboxDirective, CheckboxGroupDirective, RadioGroupDirective, SelectDirective, TextFieldDirective } from '@sl-design-system/angular/forms';
import { TextFieldComponent } from '@sl-design-system/angular/text-field';
import { SelectComponent } from '@sl-design-system/angular/select';
import { RadioComponent, RadioGroupComponent } from '@sl-design-system/angular/radio-group';
import { CheckboxComponent, CheckboxGroupComponent } from '@sl-design-system/angular/checkbox';
import { ListboxComponent } from "@sl-design-system/angular/listbox";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ButtonBarComponent,
    CheckboxComponent,
    CheckboxDirective,
    CheckboxGroupComponent,
    CheckboxGroupDirective,
    CommonModule,
    FormFieldComponent,
    FormsModule,
    RadioComponent,
    RadioGroupComponent,
    RadioGroupDirective,
    ReactiveFormsModule,
    SelectComponent,
    SelectDirective,
    ListboxComponent,
    TextFieldComponent,
    TextFieldDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormExampleComponent implements OnInit {
  formGroupTest: FormGroup;

  formGroup = new FormGroup({
    textField: new FormControl('Text field'),
    checkbox: new FormControl('checked'),
    select: new FormControl('1'),
    checkboxGroup: new FormControl(['0', '1', '2']),
    radioGroup: new FormControl('1'),
  });

  get comments() {
    return this.formGroupTest.get('comments') as FormArray;
  }

  ngOnInit(): void {
    this.formGroupTest = new FormGroup({
      comments: new FormArray([new FormControl('', Validators.required)]),
    });
  }

  clickCheckbox(event: Event): void {
    console.log('event', event);
  }

  addComment() {
    this.comments.push(new FormControl('', Validators.required));
  }
}
