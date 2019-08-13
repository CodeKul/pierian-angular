import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsRoutingModule } from './events.routing';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [EventsPageComponent]
})
export class EventsModule { }
