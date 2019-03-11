import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { AboutService } from './../../service/about.service';

@Component({
  selector: 'app-budget-add',
  templateUrl: 'add.component.html',
  styleUrls: ['./add.component.css']
})

export class BudgetAddNewComponent implements OnInit {

  // main form group names
  budgetTopics: any[] = ["house", "income", "personal", "tith"];

  // sub form array names
  houseTopics: any[] = ["bge", "frontFoot", "hoa", "homeImprovement", "internet", "mortgage", "water"];
  personalTopics: any[] = ["carPayment", "cat", "cellphone", "food", "massage", "melaleuca", "transport", "other"];
  tithTopics: any[] = ["tith"];
  incomeTopics: any[] = ["income"];

  // Main FromGroup
  budgetFormGroup: FormGroup;

  constructor(public fb: FormBuilder, public as: AboutService) {
    this.budgetFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.createBudgetFg();

    console.log(this.budgetFormGroup)
    console.log(this.houseFg.get("bge"))

  }

  get houseFg() {
    return this.budgetFormGroup.get("house");
  }

  get personalFg() {
    return this.budgetFormGroup.get("personal");
  }

  get TithFg() {
    return this.budgetFormGroup.get("tith");
  }

  get incomeFg() {
    return this.budgetFormGroup.get("income");
  }


  /**
   * Create all form groups
   */
  createBudgetFg() {
    this.budgetTopics.forEach((val) => {
      switch(val) {
        case "house": {
          this.budgetFormGroup.addControl(val, this.createFgForTopic(this.houseTopics));
          break;
        }
        case "personal": {
          this.budgetFormGroup.addControl(val, this.createFgForTopic(this.personalTopics));
          break;
        }
        case "tith": {
          this.budgetFormGroup.addControl(val, this.createFgForTopic(this.tithTopics));
          break;
        }
        case "income": {
          this.budgetFormGroup.addControl(val, this.createFgForTopic(this.incomeTopics));
          break;
        }
      }
    });
  }

  /**
   * Create FG for individual topic
   * @param topics 
   */
  createFgForTopic(topics: string[]): FormGroup {
    let fg = new FormGroup({});
    topics.forEach((val) => {
      fg.addControl(val, this.createInputFga());
    });
    return fg;
  } 

  createInputFga(): FormArray {
    let fg = new FormGroup({});
    fg.addControl("name", this.as.createNewFormControl("", false, [Validators.required]));
    fg.addControl("spent", this.as.createNewFormControl("0.00", false));
    return this.fb.array([fg]);
  }



}