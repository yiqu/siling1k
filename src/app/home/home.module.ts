import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ToggleService } from '../service/toggle.service';
import { DisplayModule } from '../shared/display/display.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { DetailsComponent } from './details/details.component';
import { GraphModule } from '../shared/graph/graph.module';
import { CalcService } from '../service/calc.service';
import { GraphService } from '../service/graph.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    DisplayModule,
    LoadingModule,
    GraphModule,
    RouterModule
  ],

  exports: [
    HomeComponent
  ],

  declarations: [
    HomeComponent,
    DetailsComponent
  ],

  providers: [
    ToggleService,
    CalcService,
    GraphService
  ],
})
export class HomeModule { }
