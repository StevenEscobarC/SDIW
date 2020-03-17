import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRequestRoutingModule } from './admin-request-routing.module';
import { AdminRequestListComponent } from './admin-request-list/admin-request-list.component';


@NgModule({
  declarations: [AdminRequestListComponent],
  imports: [
    CommonModule,
    AdminRequestRoutingModule
  ]
})
export class AdminRequestModule { }
