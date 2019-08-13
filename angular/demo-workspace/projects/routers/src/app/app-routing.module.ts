import { LoginComponent } from './login/login/login.component';
import { ResourcePageComponent } from './resources/resource-page/resource-page.component';
import { EventsPageComponent } from './events/events-page/events-page.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashPageComponent } from './dash/dash-page/dash-page.component';
import { Route } from '@angular/compiler/src/core';

// const dashRoutes: Routes = [
//   { path: 'blog', component: BlogPageComponent },
//   { path: 'events', component: EventsPageComponent },
//   { path: 'resources', component: ResourcePageComponent }
// ]

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'dash', component: DashPageComponent, children: dashRoutes },
// ];

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule) },
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(mod => mod.EventsModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(mod => mod.ResourcesModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
