import { LoginModule } from './login/login.module';
import { EventsModule } from './events/events.module';
import { BlogModule } from './blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesModule } from './resources/resources.module';
import { NavModule } from './nav/nav.module';
import { DashModule } from './dash/dash.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    
    // BlogModule,
    // EventsModule,
    // ResourcesModule,
    // LoginModule,
    // DashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
