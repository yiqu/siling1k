import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'form-inputs',
  templateUrl: 'input-array.component.html',
  styleUrls: ['./form.component.css']
})

export class FormInputArrayComponent implements OnInit {

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

  public getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }
}