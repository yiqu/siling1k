import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToggleService } from '../service/toggle.service';
import { DisplayModule } from '../shared/display/display.module';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  imports: [
    DisplayModule,
    LoadingModule
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
