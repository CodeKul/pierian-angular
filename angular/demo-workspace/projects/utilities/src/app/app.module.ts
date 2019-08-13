import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustDialogComponent } from './cust-dialog.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CustDialogComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  entryComponents : [CustDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
