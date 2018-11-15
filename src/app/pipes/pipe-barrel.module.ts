import { NgModule } from '@angular/core';
import { ProfitPercentPipe } from './profit-percent.pipe';
import { ProfitPipe } from './profit.pipe';

@NgModule({
  imports: [],

  exports: [
    ProfitPercentPipe,
    ProfitPipe
  ],

  declarations: [
    ProfitPercentPipe,
    ProfitPipe
  ],

  providers: [],
})
export class PipeModule { }
