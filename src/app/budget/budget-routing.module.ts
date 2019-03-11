import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetLandingComponent } from './landing/budget-landing.component';
import { BudgetComponent } from './budget.component';
import { BudgetOverviewComponent } from './overview/budget-overview.component';
import { BudgetAddNewComponent } from './add/add.component';

//Root routes for app
const routes: Routes = [
  { path: 'budget', component: BudgetComponent, data: {title: 'Budget Home'},
    children: [
      { path: '', component: BudgetLandingComponent, data: {title: 'Budget'} },
      { path: 'overview', component: BudgetOverviewComponent, data: {title: 'Budget Overview'} },
      { path: 'add', component: BudgetAddNewComponent, data: {title: 'Budget Add New'} },
    ]
  },
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class BudgetRoutingModule { }
