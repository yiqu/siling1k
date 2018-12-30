import { NgModule } from '@angular/core';

import { NotFoundComponent } from './404.component';
import { TitleService } from '../service/title.service';

@NgModule({
  imports: [],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent],
  providers: [],
})
export class NotFoundModule { }
