import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToggleService } from '../service/toggle.service';
import { DisplayModule } from '../shared/display/display.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    DisplayModule,
    LoadingModule
  ],

  exports: [
    HomeComponent
  ],

  declarations: [
    HomeComponent,
    DetailsComponent
  ],

  providers: [
    ToggleService
  ],
})
export class HomeModule { }
