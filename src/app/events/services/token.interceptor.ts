import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authService : AuthService) {}

  token : string = ""

  getToken(){
    this.token = sessionStorage.getItem('token')!
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    if (this.token){
      request = request.clone({ setHeaders: {
      'Authorization': `Bearer ${this.token}`
      }})
    }
    return next.handle(request)
  }

  
}
