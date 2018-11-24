import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NomModule } from '../nom/nom.module';
import { DeeGeeModule } from '../deegee/deegee.module';
import { PraxModule } from '../prax/prax.module';

@NgModule({
  imports: [
    NomModule,
    DeeGeeModule,
    PraxModule
  ],

  exports: [
    HomeComponent
  ],

  declarations: [
    HomeComponent
  ],

  providers: [],
})
export class HomeModule { }
