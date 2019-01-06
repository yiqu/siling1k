import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forrm-control-input',
  templateUrl: 'control-input.component.html',
  styleUrls: ['./form.component.css']
})

export class FormControlComponent implements OnInit {

  @Input()
  placeHolderText: string;

  @Input()
  inputType: string;

  regInputType: string = "input";
  textAreaType: string = "textarea";

  constructor() { 
    if (!this.placeHolderText) {
      this.placeHolderText = "Enter value...";
    }
    if (!this.inputType) {
      this.inputType = "input";
    }
  }

  ngOnInit() { }
}