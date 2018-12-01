import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from './service/error-handler.service';
import { MessageService } from './service/message.service';
import { DataService } from './service/data.service';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './404/404.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NavBarModule,
    AboutModule,
    HomeModule,
    NotFoundModule,
    AppRoutingModule
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
