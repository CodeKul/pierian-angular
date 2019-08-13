import { BlogModule } from './../blog/blog.module';
import { CustComponent } from './cust/cust.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPageComponent } from './dash-page/dash-page.component';

const dashRoutes: Routes = [
    { path: 'events', loadChildren: () => import('../events/events.module').then(m => m.EventsModule) },
    { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
    { path: 'resources', loadChildren: () => import('../resources/resources.module').then(m => m.ResourcesModule) }
]
const routes: Routes = [
    { path: '', component: DashPageComponent, children: dashRoutes }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule { }