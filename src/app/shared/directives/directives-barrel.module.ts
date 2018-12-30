import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight-directive/hightlight.directive';
import { ParamAnchorDirective } from './param-anchor/param-anchor.directive';

@NgModule({
  imports: [
  ],

  exports: [
    ParamAnchorDirective,
    HighlightDirective
  ],

  declarations: [
    ParamAnchorDirective, HighlightDirective
  ],

  providers: [],
})
export class DirectivesModule { }
