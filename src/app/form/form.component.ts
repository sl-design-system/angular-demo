import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@sl-design-system/angular/button';
import { ButtonBarComponent } from '@sl-design-system/angular/button-bar';
import { FormFieldComponent } from '@sl-design-system/angular/form';
import { CheckboxDirective, CheckboxGroupDirective, RadioGroupDirective, SelectDirective, TextFieldDirective } from '@sl-design-system/angular/forms';
import { TextFieldComponent } from '@sl-design-system/angular/text-field';
import { SelectOptionComponent, SelectComponent } from '@sl-design-system/angular/select';
import { RadioComponent, RadioGroupComponent } from '@sl-design-system/angular/radio-group';
import { CheckboxComponent, CheckboxGroupComponent } from '@sl-design-system/angular/checkbox';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ButtonComponent, 
    ButtonBarComponent,
    CheckboxComponent, 
    CheckboxGroupComponent,
    CheckboxGroupDirective,
    CheckboxDirective,
    CommonModule,
    FormComponent,
    FormFieldComponent,
    FormsModule, 
    RadioComponent,
    RadioGroupComponent,
    RadioGroupDirective,
    ReactiveFormsModule, 
    SelectComponent,
    SelectDirective,
    SelectOptionComponent,
    TextFieldComponent, 
    TextFieldDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, AfterViewInit{
  checkBoxValueList = [
    'Reading',
    'Watching',
    'Traveling',
    'Cooking'
  ];

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
      // console.log('this.checkBoxValueList', this.checkBoxValueList, this.contentRef.nativeElement, 'test');

    // afterRender(() => {
    //   console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);
    // }, {phase: AfterRenderPhase.Read});
  }

  ngAfterViewInit(): void {
    // const checkboxes = this.contentRef.nativeElement.querySelectorAll('sl-checkbox') as HTMLElement[];
    // console.log('this.checkBoxValueList after', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes, this.formGroupTest);

    // checkboxes.forEach((option, idx: number) => {
    //   console.log('option', option, this.checkBoxValueList[idx]);
    //   this.formGroupTest.addControl(
    //     this.checkBoxValueList[idx],//option,
    //     new FormControl(option)
    //   )
    // });

    // this.checkBoxValueList.forEach(option => {
    //   console.log('option', option);
    //   this.formGroupTest.addControl(
    //     option,
    //     new FormControl(option)
    //   )
    // });
  }

  clickCheckbox(event: Event): void {
    console.log('event', event);
  }

  addComment() {
    this.comments.push(new FormControl('', Validators.required));
  }

  // addFields(): void {
  //   const checkboxes = this.contentRef.nativeElement.querySelectorAll('sl-checkbox') as Element[];
  //   console.log('this.checkBoxValueList after', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes);

  //   checkboxes.forEach((option, idx: number) => {
  //     console.log('option', option, this.checkBoxValueList[idx]);
  //     this.formGroupTest.addControl(
  //       this.checkBoxValueList[idx],//option,
  //       new FormControl(true)
  //     )
  //     console.log('this.formGroupTest', this.formGroupTest);
  //     // const control = this.formGroupTest.get(this.checkBoxValueList[idx]);
  //     // if (control) {
  //     //   control.setValidators([Validators.required]); // Add your desired validators
  //     //   control.updateValueAndValidity(); // Update validity
  //     // }
  //     // checkboxes.forEach(option => {
  //     //   checkboxArray.push(new FormControl(false)); // Initialize with false
  //     // });
  //   });

  //   // checkboxes.forEach((option, idx: number) => {
  //   //   option.setC
  //   // }

  //  // this.ref.detectChanges();

  //   console.log('this.checkBoxValueList after_2', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes as HTMLElement[]);
  // }
}
