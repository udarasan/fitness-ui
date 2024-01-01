import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {LoginRequest, UserDTO} from "../../model/userDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService:LoginService) {
  }
  loginForm= new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  login() {

    this.loginService.login(new LoginRequest(
      this.loginForm.value.username,
      this.loginForm.value.password
    )).subscribe(res=>{
      if (true){

      }
      else {

      }
    })
  }


  register() {

  }
}
