import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { SilingFormModule } from '../shared/forms/form-barrel.module';
import { AdminComponent } from './admin.component';
import { PanelAdditionComponent } from './add/add-panel.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { PipeModule } from '../pipes/pipe-barrel.module';

@NgModule({

  declarations: [
    PanelAdditionComponent,
    AdminComponent,
    AdminLandingComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SilingFormModule,
    PipeModule
  ],

  exports: [
    PanelAdditionComponent,
    AdminComponent,
    AdminLandingComponent
  ],

  providers: [

  ],
})
export class AdminModule { }
