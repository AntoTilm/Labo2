import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../models/i-users';
import { loginInterface } from '../models/login';
import { token } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  urlApi : string = 'https://localhost:7245/api/Auth/Register'
  loginUrlApi : string = 'https://localhost:7245/api/Auth/LogIn'

  token : string | null = null

  postUser(user : Partial<iUser>) : void {
    this.http.post(this.urlApi, user).subscribe({
      next: response => {
        console.log('Register successfull: ', response)
      },
      error: error => {
        console.log('Register fail: ', error)
      }
    })
  }

  login(user : Partial<loginInterface>) : void {
    this.http.post<token>(this.loginUrlApi, user).subscribe({
      next: (response) => {
        console.log('Register successfull: ', response)
        sessionStorage.setItem('token', response.token)    
        sessionStorage.setItem('id', response.member.id)
        sessionStorage.setItem('pseudo', response.member.pseudo)
        sessionStorage.setItem('email', response.member.email)
        sessionStorage.setItem('firstname', response.member.firstname)
        sessionStorage.setItem('lastname', response.member.lastname)    
      },
      error: error => {
        console.log('Register fail: ', error)
      }
    })
    
  }
}
