import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogRoutingModule } from './blog.routing';
import { ReqResService } from './req-res.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlogRoutingModule,
    
    NgbModule
  ],
  providers: [ReqResService],
  exports: [BlogPageComponent]
})
export class BlogModule { }
