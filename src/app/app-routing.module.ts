import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './404/404.component';
import { LoadingComponent } from './shared/loading/loading.component';

 //Root routes for app
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'loading',
    component: LoadingComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, /*{ enableTracing: true }*/)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }