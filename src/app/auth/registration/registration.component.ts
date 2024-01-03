import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserProfileRequest, UserRole} from "../../model/userDTO";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regForm= new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ,Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });


  constructor(private loginService:LoginService,private router: Router) {}

  public save() {
   let userProfileRequest = new UserProfileRequest();
    userProfileRequest.role=UserRole.USER;
    userProfileRequest.username = this.regForm.get('name')?.value as string;
    userProfileRequest.password = this.regForm.get('password')?.value as string;
    userProfileRequest.email=this.regForm.get('email')?.value as string;

    this.loginService.registration(userProfileRequest).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        if (response.status==200){
          this.router.navigate(['/auth/login']);
        }

      },
      (error) => {
        console.error('Error submitting the form', error);
      }
    );


  }


  login() {

  }
}
