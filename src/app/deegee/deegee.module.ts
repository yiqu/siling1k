import { NgModule } from '@angular/core';
import { DeeGeeComponent } from './deegee.component';
import { DataService } from '../service/data.service';
import { CalcService } from '../service/calc.service';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe-barrel.module';
import { DisplayModule } from '../shared/display/display.module';

@NgModule({
  imports: [
    DisplayModule
  ],

  exports: [
    DeeGeeComponent
  ],

  declarations: [
    DeeGeeComponent
  ],

  providers: [
    DataService,
    CalcService
  ],
})
export class DeeGeeModule { }
