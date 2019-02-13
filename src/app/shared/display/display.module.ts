import { NgModule } from '@angular/core';
import { DisplayComponent } from './display.component';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipe-barrel.module';
import { DataService } from '../../service/data.service';
import { CalcService } from '../../service/calc.service';
import { DirectivesModule } from '../directives/directives-barrel.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    DirectivesModule
  ],

  exports: [
    DisplayComponent,
    CommonModule
  ],

  declarations: [
    DisplayComponent
  ],

  providers: [
  ],
})
export class DisplayModule { }
