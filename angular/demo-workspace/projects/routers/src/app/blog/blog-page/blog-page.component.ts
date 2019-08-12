import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Reg } from './blog-reg-domain';

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

  onSub() {
    console.log(this.fg)
    console.log(this.fg.value)

    let regDmn = this.fg.value as Reg
  }
}


