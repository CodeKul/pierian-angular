import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  fg: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      usNm: this.fb.control(''),
      eml: this.fb.control(''),
      pass: this.fb.control('')
    })
  }
}
