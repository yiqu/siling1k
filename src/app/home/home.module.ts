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
import { PipeModule } from '../pipes/pipe-barrel.module';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsResolver } from "./details/details-resolver.service";
import { TitleService } from '../service/title.service';
import { SilingSummaryComponent } from './summary/summary.component';

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
    DetailsComponent,
    SilingSummaryComponent
  ],

  providers: [
    ToggleService,
    CalcService,
    GraphService,
    DetailsResolver,
    TitleService
  ],
})
export class HomeModule { }
