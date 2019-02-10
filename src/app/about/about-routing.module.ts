import { NgModule } from '@angular/core';
import { CanDeactivateGuard } from './about-new/about-new-deactivate-guard.service';
import { AboutEditComponent } from './about-edit/about-edit.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { MarketIndexFormResolver } from './about-new/market-index.resolver.service';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutLandingComponent } from './about-landing/about-landing.component';
import { AboutCreationComponent } from './about-new/about-new.component';


 //Root routes for app
const routes: Routes = [
  { path: '', component: AboutComponent, data: {title: 'About'},
    children: [
      { path: '', component: AboutLandingComponent, data: {title: 'About'} },
      { path: 'new', component: AboutCreationComponent, 
        canDeactivate:[CanDeactivateGuard], 
        data: {title: 'Add New About'},
        resolve: { newFormLayout: MarketIndexFormResolver } },
      { path: ':id', component: AboutDetailComponent, data: {title: 'About Details'} },
      { path: ':id/edit', component: AboutEditComponent }
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
export class AboutRoutingModule { }
