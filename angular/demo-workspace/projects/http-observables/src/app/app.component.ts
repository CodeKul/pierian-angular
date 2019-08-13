import { SingleUserDto } from './single-user';
import { Component, OnInit } from '@angular/core';
import { ObsService } from './obs.service';
import { ReqResService } from './req-res.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-observables';
  singleUsrDto: SingleUserDto

  constructor(
    private rqrs: ReqResService
  ) {

  }

  ngOnInit() {
   
  }

  onSingleUser() {
    this.rqrs.singleUser(5).subscribe(res => {
      console.log('future result', res)
      this.singleUsrDto = res as SingleUserDto
    })
    console.log('result')
  }
}
