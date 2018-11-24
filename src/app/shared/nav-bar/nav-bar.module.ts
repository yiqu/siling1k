import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [
    NavBarComponent
  ],

  declarations: [
    NavBarComponent
  ],

  providers: [],
})
export class NavBarModule { }
