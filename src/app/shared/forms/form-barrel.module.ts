import { NgModule } from '@angular/core';
import { FormInputComponent } from './input.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FormInputArrayComponent } from './input-array.component';
import { FormControlComponent } from './control-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    ReactiveFormsModule,
    FormInputComponent,
    FormInputArrayComponent,
    FormControlComponent
  ],

  declarations: [
    FormInputComponent,
    FormInputArrayComponent,
    FormControlComponent
  ],

  providers: [],
})
export class SilingFormModule { }
