import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from './service/error-handler.service';
import { MessageService } from './service/message.service';
import { DataService } from './service/data.service';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './404/404.module';
import { LoadingModule } from './shared/loading/loading.module';
import { TitleService } from './service/title.service';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './service/admin.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AboutService } from './service/about.service';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      extendedTimeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      newestOnTop: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
    FormsModule,
    HttpClientModule,
    NavBarModule,
    HomeModule,
    NotFoundModule,
    LoadingModule,
    AdminModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AppRoutingModule
  ],

  providers: [
    HttpErrorHandler,
    MessageService,
    DataService,
    TitleService,
    AdminService,
    AboutService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
