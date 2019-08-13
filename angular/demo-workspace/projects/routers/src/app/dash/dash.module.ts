import { DashRoutingModule } from './dash.routing';
import { NavModule } from './../nav/nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';
import { CustComponent } from './cust/cust.component';

@NgModule({
  declarations: [DashPageComponent, CustComponent],
  imports: [
    CommonModule,
    NavModule,
    DashRoutingModule
  ],
  exports: [DashPageComponent]
})
export class DashModule { }
