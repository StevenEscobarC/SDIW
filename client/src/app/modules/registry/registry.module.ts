import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RegistryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistryModule { }
