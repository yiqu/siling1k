import { NgModule } from '@angular/core';
import { NomComponent } from './nom.component';
import { DisplayModule } from '../shared/display/display.module';
import { DataService } from '../service/data.service';
import { CalcService } from '../service/calc.service';

@NgModule({
  imports: [
    DisplayModule
  ],

  exports: [
    NomComponent
  ],

  declarations: [
    NomComponent
  ],
  
  providers: [
    CalcService,
    DataService
  ],
})
export class NomModule { }
