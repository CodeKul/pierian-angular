import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { ResourcesRoutingModule } from './resources.routing';

@NgModule({
  declarations: [ResourcePageComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ],
  exports : [ResourcePageComponent]
})
export class ResourcesModule { }
