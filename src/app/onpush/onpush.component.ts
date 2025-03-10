import {ChangeDetectionStrategy, Component, HostListener, inject, model, OnChanges, SimpleChanges} from '@angular/core';
import {ButtonBarComponent} from "@sl-design-system/angular/button-bar";
import {ButtonComponent} from "@sl-design-system/angular/button";
import {CheckboxComponent} from "@sl-design-system/angular/checkbox";
import {
  CheckboxDirective, TextFieldDirective
} from "@sl-design-system/angular/forms";
import {FormComponent, FormFieldComponent} from "@sl-design-system/angular/form";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {TextFieldComponent} from "@sl-design-system/angular/text-field";

@Component({
  selector: 'app-onpush',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonBarComponent,
    ButtonComponent,
    CheckboxComponent,
    CheckboxDirective,
    FormComponent,
    FormFieldComponent,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
    NgIf,
    TextFieldComponent,
    TextFieldDirective
  ],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.css'
})
export class OnpushComponent {
  test: string[] = [];

  // @HostListener('sl-change', ['$event.target'])
  // onClick(btn: any) {
  //   console.log('on click', btn);
  // } // TODO: maybe listen slChange sl-change ???

  formGroup = new FormGroup({
    checkbox: new FormControl('checked', [Validators.required]),
    textField: new FormControl('Text field', [Validators.required]),
  });

  formGroup1 = new FormGroup({
    checkbox1: new FormControl(false, [Validators.required])
  });

  clickCheckbox(event: Event): void {
    console.log('event', event, event.type, event.eventPhase, event.target,  typeof event.target);
  }

  addComment() {
    this.test.push('test');
  }
}
