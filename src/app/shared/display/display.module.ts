import { NgModule } from '@angular/core';
import { DisplayComponent } from './display.component';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipe-barrel.module';
import { DataService } from '../../service/data.service';
import { CalcService } from '../../service/calc.service';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],

  exports: [
    DisplayComponent,
    CommonModule
  ],

  declarations: [
    DisplayComponent
  ],

  providers: [
    DataService,
    CalcService
  ],
})
export class DisplayModule { }
