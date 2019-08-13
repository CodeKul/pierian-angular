import { CustComponent } from './cust/cust.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPageComponent } from './dash-page/dash-page.component';

const routes: Routes = [
    { path: '', component: DashPageComponent },
    { path: 'cust', component: CustComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule { }