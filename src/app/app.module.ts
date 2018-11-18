import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { DeeGeeModule } from './deegee/deegee.module';
import { HttpErrorHandler } from './service/error-handler.service';
import { MessageService } from './service/message.service';
import { DataService } from './service/data.service';
import { NomModule } from './nom/nom.module';
import { PraxModule } from './prax/prax.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DeeGeeModule,
    NomModule,
    PraxModule
  ],

  providers: [
    HttpErrorHandler,
    MessageService,
    DataService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
