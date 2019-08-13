import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reg } from './blog-page/blog-reg-domain';

@Injectable()
export class ReqResService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(reg : Reg): Observable<Object> {
    return this.http.post(`https://reqres.in/api/users`, reg, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
}
