import { NgModule } from '@angular/core';
import { DeeGeeComponent } from './deegee.component';
import { DataService } from '../service/data.service';

@NgModule({
  imports: [],

  exports: [
    DeeGeeComponent
  ],

  declarations: [
    DeeGeeComponent
  ],

  providers: [
    DataService
  ],
})
export class DeeGeeModule { }
