import { Component, Input } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,

  SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input()
  dt: number

  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges`, changes)
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy`)
  }
}
