import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './404/404.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DetailsComponent } from './home/details/details.component';
import { DetailsResolver } from './home/details/details-resolver.service';

 //Root routes for app
const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'about', component: AboutComponent, data: {title: 'About'} },
  { path: 'details', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:panelId', component: DetailsComponent, 
    data: {pageTitle: "Details"},
    //resolve: {panelItemInfo: DetailsResolver} 
  },
  { path: 'loading', component: LoadingComponent, data: {title: 'Loading'} },
  /**
  * Since the default matching strategy is "prefix" , Angular checks if the path you entered in 
  * the URL does start with the path specified in the route. Of course every path starts with ''  
  * (Important: That's no whitespace, it's simply "nothing").
  * To fix this behavior, you need to change the matching strategy to "full"
  */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      /*{ enableTracing: true }*/
      { anchorScrolling: 'enabled',
        //scrollPositionRestoration: 'top'
      },
      
    )
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
