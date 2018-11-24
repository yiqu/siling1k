import { NgModule } from '@angular/core';
import { ProfitPercentPipe } from './profit-percent.pipe';
import { ProfitPipe } from './profit.pipe';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  imports: [],

  exports: [
    ProfitPercentPipe,
    ProfitPipe,
    DateFormatPipe
  ],

  declarations: [
    ProfitPercentPipe,
    ProfitPipe,
    DateFormatPipe
  ],

  providers: [],
})
export class PipeModule { }
