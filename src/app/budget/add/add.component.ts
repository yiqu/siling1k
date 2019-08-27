import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"
import { AboutService } from './../../service/about.service';
import * as moment from 'moment';

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
  basicControl: string[] = ["name", "spent"];

  // Main FromGroup
  budgetFormGroup: FormGroup;
  today: moment.Moment;

  constructor(public fb: FormBuilder, public as: AboutService) {
    this.budgetFormGroup = new FormGroup({});
    this.today = moment();
  }

  ngOnInit() {
    this.createBudgetFg();

    console.log(this.budgetFormGroup.controls)
    //console.log(this.houseFg.get("bge"))
    console.log(this.bgeArray.at(0))

  }

  get houseFg() {
    return this.budgetFormGroup.get("house");
  }

  get personalFg() {
    return this.budgetFormGroup.get("personal");
  }

  get tithFg() {
    return this.budgetFormGroup.get("tith");
  }

  get incomeFg() {
    return this.budgetFormGroup.get("income");
  }

  get bgeArray() {
    return this.houseFg.get('bge') as FormArray;
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

  getTopicArr(mainTopic: string): string[] {
    switch(mainTopic) {
      case "house": {
        return this.houseTopics;
      }
      case "personal": {
        return this.personalTopics;
      }
      case "tith": {
        return this.tithTopics;
      }
      case "income": {
        return this.incomeTopics;
      }
    }
  }

}