import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { iUser } from '../../models/i-users';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {

  constructor(private formBuilder: FormBuilder, private _authService : AuthService) {}

  userForm = this.formBuilder.group({
    pseudo : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)], []],
    email : ["", [Validators.required, Validators.maxLength(250), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')], []],
    password : ["", [Validators.required, Validators.maxLength(97), Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{5,}')], []],
    lastName : ["", [Validators.required, Validators.maxLength(50),], []],
    firstName : ["", [Validators.required, Validators.maxLength(50)], []],
  })
  
  onSubmit(){
    console.log(this.userForm.value);    
    this._authService.postUser(this.userForm.value)
  }  
}
