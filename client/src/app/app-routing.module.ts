import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/masterPage/home/home.component';
import { PageNotFoundComponent } from './public/masterPage/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }, 
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path: 'security',
    loadChildren: './modules/security/security.module#SecurityModule'
    /*prueba*/
  }
  ,
  {
    path:'**' ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
