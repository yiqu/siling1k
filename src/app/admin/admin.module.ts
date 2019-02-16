import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { SilingFormModule } from '../shared/forms/form-barrel.module';
import { AdminComponent } from './admin.component';
import { PanelAdditionComponent } from './add/add-panel.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { PipeModule } from '../pipes/pipe-barrel.module';
import { PanelEditComponent } from './edit/edit-panel.component';
import { LoadingModule } from '../shared/loading/loading.module';
import { SilingModalModule } from '../shared/modal/siling-modal.module';

@NgModule({
  declarations: [
    PanelAdditionComponent,
    AdminComponent,
    AdminLandingComponent,
    PanelEditComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SilingFormModule,
    LoadingModule,
    PipeModule,
    SilingModalModule
  ],

  exports: [
    PanelAdditionComponent,
    AdminComponent,
    AdminLandingComponent,
    PanelEditComponent
  ],

  providers: [

  ],
})
export class AdminModule { }
