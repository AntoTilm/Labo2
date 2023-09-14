import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private formBuilder : FormBuilder, private _authService : AuthService) {}
  
  loginForm = this.formBuilder.group({
    identifier : ["", [Validators.required], []],
    password : ["", [Validators.required], []],
  })

  onSubmit(){
    console.log(this.loginForm.value);    
    this._authService.login(this.loginForm.value)
  }  
} 
