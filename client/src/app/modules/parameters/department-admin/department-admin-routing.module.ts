import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCreatorComponent } from './department-creator/department-creator.component';
import { DepartmentListComponent } from './department-list/department-list.component';


const routes: Routes = [
{
  path: 'creator',
  component:DepartmentCreatorComponent
},
{
  path: 'department-list',
  component:DepartmentListComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentAdminRoutingModule { }
