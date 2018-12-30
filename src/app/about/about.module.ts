import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { TitleService } from '../service/title.service';

@NgModule({
  imports: [],

  exports: [
    AboutComponent
  ],

  declarations: [
    AboutComponent
  ],

  providers: [
    TitleService
  ]
})
export class AboutModule { }
