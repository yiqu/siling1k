import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],

  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],

  declarations: [],

  providers: [],
})
export class MaterialModule { }
