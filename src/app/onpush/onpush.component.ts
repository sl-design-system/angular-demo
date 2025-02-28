import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonBarComponent} from "@sl-design-system/angular/button-bar";
import {ButtonComponent} from "@sl-design-system/angular/button";
import {CheckboxComponent, CheckboxGroupComponent} from "@sl-design-system/angular/checkbox";
import {
  CheckboxDirective,
  CheckboxGroupDirective,
  RadioGroupDirective,
  SelectDirective, TextFieldDirective
} from "@sl-design-system/angular/forms";
import {FormComponent, FormFieldComponent} from "@sl-design-system/angular/form";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {RadioComponent, RadioGroupComponent} from "@sl-design-system/angular/radio-group";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SelectComponent, SelectOptionComponent} from "@sl-design-system/angular/select";
import {TextFieldComponent} from "@sl-design-system/angular/text-field";

@Component({
  selector: 'app-onpush',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonBarComponent,
    ButtonComponent,
    CheckboxComponent,
    CheckboxDirective,
    CheckboxGroupComponent,
    CheckboxGroupDirective,
    FormComponent,
    FormFieldComponent,
    JsonPipe,
    NgForOf,
    RadioComponent,
    RadioGroupComponent,
    RadioGroupDirective,
    ReactiveFormsModule,
    SelectComponent,
    SelectDirective,
    SelectOptionComponent,
    TextFieldComponent,
    TextFieldDirective,
    NgIf
  ],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.css'
})
export class OnpushComponent {
  // formGroupTest: FormGroup;
  test: string[] = [];

  formGroup = new FormGroup({
    checkbox: new FormControl('checked', [Validators.required]),
    checkboxGroup: new FormControl(['0', '1', '2'], [Validators.required]),
  });

  // get comments() {
  //   return this.formGroupTest.get('comments') as FormArray;
  // }

  ngOnInit(): void {
    // this.formGroupTest = new FormGroup({
    //   comments: new FormArray([new FormControl('', Validators.required)]),
    // });
  }

  clickCheckbox(event: Event): void {
    console.log('event', event);
  }

  addComment() {
    // this.comments.push(new FormControl('', Validators.required));
    this.test.push('test');
  }
}
