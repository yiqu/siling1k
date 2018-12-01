import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToggleService } from '../service/toggle.service';
import { DisplayModule } from '../shared/display/display.module';

@NgModule({
  imports: [
    DisplayModule
  ],

  exports: [
    HomeComponent
  ],

  declarations: [
    HomeComponent
  ],

  providers: [
    ToggleService
  ],
})
export class HomeModule { }
