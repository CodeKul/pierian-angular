import { BlogValidator } from './../my-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Reg } from './blog-reg-domain';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  fg: FormGroup
  isConPass: boolean = false

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let usNmComp = Validators.compose([
      Validators.required,
      BlogValidator.custValidator
    ])

    let emVlCmp = Validators.compose([
      Validators.required,
      Validators.email
    ])

    this.fg = this.fb.group({
      usNm: this.fb.control('', usNmComp),
      eml: this.fb.control('', emVlCmp),
      pass: this.fb.control('', Validators.required),
      dyna: this.fb.array([])
    })
  }

  onDyna() {
    let dynaArr = this.fg.controls.dyna as FormArray
    dynaArr.push(this.fb.control(''))
  }

  onSub(conPass: string) {
    console.log(this.fg)
    console.log(this.fg.value)


    let regDmn = this.fg.value as Reg
    this.isConPass = (conPass == regDmn.pass)
  }
}


