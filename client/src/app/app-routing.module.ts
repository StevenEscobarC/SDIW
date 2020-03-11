import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { AuthenticationRequiredGuard } from './helpers/guards/authentication-required.guard';


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
    
    
  },
  {
    path: 'registry',
    loadChildren: './modules/registry/registry.module#RegistryModule'
  },
  {
    path: 'department',
    loadChildren: './modules/parameters/department-admin/department-admin.module#DepartmentAdminModule',
    canActivate: [AuthenticationRequiredGuard]
  }
  ,
  {
    path: 'city',
    loadChildren: './modules/parameters/city-admin/city-admin.module#CityAdminModule',
    canActivate: [AuthenticationRequiredGuard]

  },
  {
    path: 'property',
    loadChildren: './modules/parameters/property-user/property-user.module#PropertyUserModule',
    canActivate: [AuthenticationRequiredGuard]
  },
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
