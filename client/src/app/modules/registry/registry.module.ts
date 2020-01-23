import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RegistryRoutingModule
  ]
})
export class RegistryModule { }
