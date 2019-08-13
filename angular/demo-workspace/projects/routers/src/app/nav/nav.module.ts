import { DashRoutingModule } from './../dash/dash.routing';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
