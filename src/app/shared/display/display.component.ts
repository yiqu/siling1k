import { Component, SimpleChange, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ItemDetail } from '../models/data.model';
import { Utils } from '../utils';
import { CalcService } from '../../service/calc.service';
import { ToggleService } from '../../service/toggle.service';
import { ToggleAction } from '../models/toggle-action.model';


@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['display.component.css', '../../app.component.css',
  '../loading/loading.component.css']
})
export class DisplayComponent implements OnChanges {
  
  @Input()
  displayImageUrl: string;
  @Input()
  displayData: ItemDetail[];
  @Input()
  displayTitle: string;
  @Input()
  isExpanded: boolean;
  
  @Output()
  toggledPanel: EventEmitter<any> = new EventEmitter<any>();

  isPanelExpanded: boolean = false;
  toggleAction: ToggleAction;
  expandText: string = "See details";
  data: ItemDetail[];
  rev: ItemDetail[]

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // Enable jq tooltip
    Utils.enableJqueryTooltip();
    
    // check if the current rendered Display Component is a detailed (expanded) version
    if (changes.isExpanded.currentValue) {
      this.isPanelExpanded = true;
      this.expandText = "Go back";
    }
    if (changes.displayData.currentValue) {
      this.displayData = this.cs.getReturnPercent(this.displayData);
    }
  }

  constructor(private cs: CalcService) {
    this.toggleAction = new ToggleAction(null, null);
  }


  getGainsClass(num: number): string {
    let defaults = "gains-rate col-md numbers med-number spacing-half";
    return num > 0 ? (defaults + " positive") : (defaults + " negative");
  }

  formatCurrency(num: number): string {
    return Utils.toLocalFormatting(num);
  }

  onExpandToggle() {
    this.isPanelExpanded = !this.isPanelExpanded;
    this.toggledPanel.emit();
  }

  getExpandToggleIcon(): string {
    return this.isPanelExpanded ? "arrow_back" : "call_made";
  }
}