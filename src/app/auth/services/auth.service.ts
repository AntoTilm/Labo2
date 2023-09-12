import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../models/i-users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  urlApi : string = 'https://localhost:7245/api/Auth/Register'


  postUser(user : iUser) : void {
    this.http.post(this.urlApi, user)
  }
}
