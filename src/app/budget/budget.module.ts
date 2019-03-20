import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SilingFormModule } from '../shared/forms/form-barrel.module';
import { PipeModule } from '../pipes/pipe-barrel.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { SilingModalModule } from '../shared/modal/siling-modal.module';
import { BudgetLandingComponent } from './landing/budget-landing.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { BudgetOverviewComponent } from './overview/budget-overview.component';
import { BudgetAddNewComponent } from './add/add.component';
import { MaterialModule } from '../shared/barrels/material.module';

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetLandingComponent,
    BudgetOverviewComponent,
    BudgetAddNewComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    SilingFormModule,
    LoadingModule,
    PipeModule,
    SilingModalModule,
    BudgetRoutingModule,
    MaterialModule
  ],

  exports: [
  ],

  providers: [

  ],
})
export class BudgetModule { }
