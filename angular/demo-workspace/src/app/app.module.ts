import { CustRegService } from './services/cust-reg.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HiComponent } from './first/hi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './pricing/nav/nav.component';
import { InfoComponent } from './pricing/info/info.component';
import { CardConatinerComponent } from './pricing/card-conatiner/card-conatiner.component';
import { CardComponent } from './pricing/card-conatiner/card/card.component';
import { FooterContainerComponent } from './pricing/footer-container/footer-container.component';
import { FooterComponent } from './pricing/footer-container/footer/footer.component';
import { CustomComponent } from './custom/custom.component';
import { ServicesComponent } from './services/services.component';
import { Comp1Component } from './services/comp1/comp1.component';
import { Comp2Component } from './services/comp2/comp2.component';
import { ProgressDemoComponent } from './services/progress-demo/progress-demo.component';
import { ProgBarComponent } from './services/progress-demo/prog-bar.component';
import { OpBtnsComponent } from './services/progress-demo/op-btns.component';
import { CustDialogComponent } from './cust-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HiComponent,
    DatabindingComponent,
    DirectivesComponent,
    SizerDirective,
    PricingComponent,
    NavComponent,
    InfoComponent,
    CardConatinerComponent,
    CardComponent,
    FooterContainerComponent,
    FooterComponent,
    CustomComponent,
    ServicesComponent,
    Comp1Component,
    Comp2Component,
    ProgressDemoComponent,
    ProgBarComponent,
    OpBtnsComponent,
    CustDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CustRegService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
