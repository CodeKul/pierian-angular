import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  st = {
    background: 'red',
    color: 'white'
  }
  isVs = true

  os: Array<OsInfo> = [
    new OsInfo('iOS', 10),
    { os: 'android', version: 9 },
    { os: 'rim', version: 4 },
    { os: 'mango', version: 5 },
    { os: 'windows', version: 10 }
  ]

  osInfo: OsInfo

  constructor() { }

  ngOnInit() {
    this.osInfo = this.getOsInfoFromServer()
  }

  getOsInfoFromServer() {
    // http client code
    return new OsInfo('kdahfkj', 89)
  }
}

export class OsInfo {

  constructor(
    public os: string,
    public version: number
  ) {

  }
}
