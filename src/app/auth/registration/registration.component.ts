import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regForm= new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ,Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });



  constructor(

  ) {

  }

  public save() {
   /* let userProfileRequest = new UserProfileRequest();
    userProfileRequest.role=UserRole.USER;
    userProfileRequest.email=this.regiseterForm.controls['email'].value;
    userProfileRequest.name=this.regiseterForm.controls['userName'].value;
    userProfileRequest.password=this.regiseterForm.controls['password'].value;

    this.profileService.addUser(userProfileRequest).subscribe(
      {
        next: (v) => {
          this.snackBar.open("User Registered", 'Ok', { horizontalPosition: 'center', verticalPosition : 'bottom', duration: 4000 });},
        error: (e) =>  {   this.snackBar.open('Error in  process. Try again.', 'Ok', { horizontalPosition: 'center', verticalPosition : 'top', duration: 3000 });},
        complete: () => {

          this.router.navigate(['']);
        }
      }
    )*/
  }

  login() {

  }
}
