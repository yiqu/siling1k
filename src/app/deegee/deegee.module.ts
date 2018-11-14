import { NgModule } from '@angular/core';
import { DeeGeeComponent } from './deegee.component';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],

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
