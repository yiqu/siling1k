import { NgModule } from '@angular/core';
import { PraxComponent } from './prax.component';
import { DisplayModule } from '../shared/display/display.module';
import { DataService } from '../service/data.service';
import { CalcService } from '../service/calc.service';

@NgModule({
  imports: [
    DisplayModule
  ],

  exports: [
    PraxComponent
  ],

  declarations: [
    PraxComponent
  ],
  
  providers: [
    CalcService,
    DataService
  ],
})
export class PraxModule { }
