import { Component, SimpleChange, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ItemDetail } from '../models/data.model';
import { Utils } from '../utils';
import { CalcService } from '../../service/calc.service';
import { ToggleAction } from '../models/toggle-action.model';


@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['display.component.css', '../../app.component.css']
})

export class DisplayComponent implements OnChanges {
  
  @Input()
  displayImageUrl: string;
  @Input()
  displayData: ItemDetail[];
  @Input()
  displayTitle: string;
  
  @Output()
  toggledPanel: EventEmitter<ToggleAction> = new EventEmitter<ToggleAction>();

  isPanelExpanded: boolean = false;
  toggleAction: ToggleAction;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes", changes['displayData'])
    console.log('Changes')
    this.displayData = this.cs.getReturnPercent(this.displayData);

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

  onExpandToggle(panelToggled) {
    this.isPanelExpanded = !this.isPanelExpanded;
    this.toggleAction.setItemId(panelToggled);
    this.toggleAction.setActionId(this.isPanelExpanded ? "expand" : "collapse");
    this.toggledPanel.emit(this.toggleAction);
  }

  getExpandToggleIcon(): string {
    return this.isPanelExpanded ? "call_received" : "call_made";
  }
}