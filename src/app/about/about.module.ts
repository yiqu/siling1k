import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { TitleService } from '../service/title.service';
import { AboutService } from '../service/about.service';
import { AboutLandingComponent } from './about-landing/about-landing.component';
import { AboutCreationComponent } from './about-new/about-new.component';
import { AboutEditComponent } from './about-edit/about-edit.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { LoadingModule } from '../shared/loading/loading.module';
import { CanDeactivateGuard } from "./about-new/about-new-deactivate-guard.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MarketIndexFormResolver } from "./about-new/market-index.resolver.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoadingModule,
    ReactiveFormsModule
  ],

  exports: [
    AboutComponent,
    AboutLandingComponent,
    AboutCreationComponent,
    AboutEditComponent,
    AboutDetailComponent
  ],

  declarations: [
    AboutComponent,
    AboutLandingComponent,
    AboutCreationComponent,
    AboutEditComponent,
    AboutDetailComponent
  ],

  providers: [
    TitleService,
    AboutService,
    CanDeactivateGuard,
    MarketIndexFormResolver
  ]
})
export class AboutModule { }
