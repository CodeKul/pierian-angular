import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [BlogPageComponent]
})
export class BlogModule { }
