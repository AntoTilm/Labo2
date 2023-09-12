import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {

  constructor(private formBuilder: FormBuilder, private _authService : AuthService) {}

  userForm = this.formBuilder.group({
    pseudo : [""],
    email : [""],
    password : [""],
    lastName : [""],
    firstName : [""],
  })

  postUser () {
    this._authService.postUser(this.userForm.value?)
  }
  
  
  onSubmit(){
    console.log(this.userForm.value);    
  }  
}
