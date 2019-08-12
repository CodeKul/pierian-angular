import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }

  listSMS() {

  }

  sendSMS(): Observable<number> {
    return new Observable(function () {
      for (let i = 0; i < 100; i++) {
        //partial progress

        if(i == 10) {
          // error
        }
      }
      //completion
    })
  }
}
