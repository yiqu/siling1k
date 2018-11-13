import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }      from '@angular/forms';
import { DeeGeeModule } from './deegee/deegee.module';
import { HttpErrorHandler }     from './service/error-handler.service';
import { MessageService }       from './service/message.service';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DeeGeeModule
  ],

  providers: [
    HttpErrorHandler,
    MessageService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
