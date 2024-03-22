import {
  afterRender,
  AfterRenderPhase, AfterViewInit, ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
// import {FormsModule} from "@sl-design-system/angular";
import { FormsModule as CoreFormsModule } from '@sl-design-system/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ReactiveFormsModule, CoreFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  query = '';
  results = Array.from(Array(5)).map((_, i) => i );

  @ViewChild('test') contentRef: ElementRef;

  search(searchForm:{query:string}) {
    this.query = searchForm.query;
  }

  checkBoxValueList = [
    'Reading',
    'Watching',
    'Traveling',
    'Cooking'
  ];

  formGroupTest = new FormGroup({});

  formGroup = new FormGroup({
    textField: new FormControl('Text field'),
    checkbox: new FormControl('checked'),
    select: new FormControl('1'),
    checkboxGroup: new FormControl(['2', '1', '0']),
    radioGroup: new FormControl('1')
  });

  constructor(
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // console.log('this.checkBoxValueList', this.checkBoxValueList, this.contentRef.nativeElement, 'test');

    // afterRender(() => {
    //   console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);
    // }, {phase: AfterRenderPhase.Read});
  }

  ngAfterViewInit(): void {
    const checkboxes = this.contentRef.nativeElement.querySelectorAll('sl-checkbox') as HTMLElement[];
    console.log('this.checkBoxValueList after', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes, this.formGroupTest);

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

  addFields(): void {
    const checkboxes = this.contentRef.nativeElement.querySelectorAll('sl-checkbox') as Element[];
    console.log('this.checkBoxValueList after', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes);

    checkboxes.forEach((option, idx: number) => {
      console.log('option', option, this.checkBoxValueList[idx]);
      this.formGroupTest.addControl(
        this.checkBoxValueList[idx],//option,
        new FormControl(true)
      )
      console.log('this.formGroupTest', this.formGroupTest);
      // const control = this.formGroupTest.get(this.checkBoxValueList[idx]);
      // if (control) {
      //   control.setValidators([Validators.required]); // Add your desired validators
      //   control.updateValueAndValidity(); // Update validity
      // }
      // checkboxes.forEach(option => {
      //   checkboxArray.push(new FormControl(false)); // Initialize with false
      // });
    });

    // checkboxes.forEach((option, idx: number) => {
    //   option.setC
    // }

   // this.ref.detectChanges();

    console.log('this.checkBoxValueList after_2', this.checkBoxValueList, this.contentRef.nativeElement, 'test', checkboxes as HTMLElement[]);
  }
}
