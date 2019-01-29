import { NgModule } from '@angular/core';
import { ProfitPercentPipe } from './profit-percent.pipe';
import { ProfitPipe } from './profit.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { ActionTranslate } from './action-translate.pipe';

@NgModule({
  imports: [],

  exports: [
    ProfitPercentPipe,
    ProfitPipe,
    DateFormatPipe,
    ActionTranslate
  ],

  declarations: [
    ProfitPercentPipe,
    ProfitPipe,
    DateFormatPipe,
    ActionTranslate
  ],

  providers: [],
})
export class PipeModule { }
