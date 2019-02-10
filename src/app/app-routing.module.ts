import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './404/404.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DetailsComponent } from './home/details/details.component';
import { DetailsResolver } from './home/details/details-resolver.service';
import { PanelAdditionComponent } from './admin/add/add-panel.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { PanelEditComponent } from './admin/edit/edit-panel.component';

 //Root routes for app
const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'about', loadChildren: "./about/about.module#AboutModule" },
  { path: 'details', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:panelId', component: DetailsComponent, 
    data: {pageTitle: "Details"},
    //resolve: {panelItemInfo: DetailsResolver} 
  },
  {
    path: 'admin', component: AdminComponent, data: {title: 'Admin'},
    children: [
      { path: '', component: AdminLandingComponent, data: {title: 'Admin Lounge'} },
      { path: 'add', component: PanelAdditionComponent, data: {title: 'Add New Data'} },
      { path: 'edit', component: PanelEditComponent, data: {title: 'Edit Existing Data'} }
    ]
  },
  { path: 'loading', component: LoadingComponent, data: {title: 'Loading'} },
  /**
  * Since the default matching strategy is "prefix" , Angular checks if the path you entered in 
  * the URL does start with the path specified in the route. Of course every path starts with ''  
  * (Important: That's no whitespace, it's simply "nothing").
  * To fix this behavior, you need to change the matching strategy to "full"
  */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, data: {title: 'Not Found'} }
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
