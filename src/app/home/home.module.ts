import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToggleService } from '../service/toggle.service';
import { DisplayModule } from '../shared/display/display.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { DetailsComponent } from './details/details.component';
import { GraphModule } from '../shared/graph/graph.module';

@NgModule({
  imports: [
    DisplayModule,
    LoadingModule,
    GraphModule
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
