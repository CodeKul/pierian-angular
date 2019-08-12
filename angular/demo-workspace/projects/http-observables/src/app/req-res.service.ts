import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor(
    private http : HttpClient
  ) { }

  listUsers() {
   
  }

  singleUser(id : number) {
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }

  createUser() {

  }
}
