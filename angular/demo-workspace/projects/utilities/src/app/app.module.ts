import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustDialogComponent } from './cust-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustDialogComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,
  ],
  providers: [],
  entryComponents : [CustDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
