import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
