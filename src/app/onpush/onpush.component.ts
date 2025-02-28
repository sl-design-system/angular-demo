import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {ButtonBarComponent} from "@sl-design-system/angular/button-bar";
import {ButtonComponent} from "@sl-design-system/angular/button";
import {CheckboxComponent, CheckboxGroupComponent} from "@sl-design-system/angular/checkbox";
import {
  CheckboxDirective,
  CheckboxGroupDirective
} from "@sl-design-system/angular/forms";
import {FormComponent, FormFieldComponent} from "@sl-design-system/angular/form";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.css'
})
export class OnpushComponent {
  // formGroupTest: FormGroup;
  test: string[] = [];

  // @HostListener('sl-change', ['$event.target'])
  // onClick(btn: any) {
  //   console.log('on click button', btn);
  // } // TODO: maybe listen slChange sl-change ???

  formGroup = new FormGroup({
    checkbox: new FormControl('checked', [Validators.required]),
    checkboxGroup: new FormControl(['0', '1', '2'], [Validators.required]),
  });

  // get comments() {
  //   return this.formGroupTest.get('comments') as FormArray;
  // }

  formGroup1 = new FormGroup({
    checkbox1: new FormControl(false, [Validators.required])
  });

  // ngOnInit(): void {
  //   // this.formGroupTest = new FormGroup({
  //   //   comments: new FormArray([new FormControl('', Validators.required)]),
  //   // });
  // }

  clickCheckbox(event: Event): void {
    console.log('event', event, event.type, event.eventPhase, event.target,  typeof event.target);

    if (event.target instanceof HTMLInputElement) {
      console.log('event target', event.target.value);
    } else if (event.target instanceof CheckboxComponent) {
      console.log('event target', event.target, (event.target as CheckboxComponent).value, event.target.checked);
    } else {
      console.log('event target', event.target, typeof event.target);
    }
  }

  addComment() {
    // this.comments.push(new FormControl('', Validators.required));
    this.test.push('test');
  }
} // TODO: is the checkbox directive necessary?
