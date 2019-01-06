import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: 'input.component.html',
  styleUrls: ['./form.component.css']
})

export class FormInputComponent implements OnInit {

  @Input()
  formConfig: any;

  @Input()
  formGroup: FormGroup;

  @Input()
  controlName: string;

  inputType: string = "input";
  textAreaType: string = "textarea";

  constructor() {
  }

  ngOnInit() {
  }
}