import { EventsModule } from './events/events.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesModule } from './resources/resources.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BlogModule,
    EventsModule,
    ResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
