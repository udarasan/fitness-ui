import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../service/login.service";
import { LoginRequest, UserDTO } from "../../model/userDTO";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  login() {
    const formData = new LoginRequest();
    formData.email = this.loginForm.get('username')?.value as string;
    formData.password = this.loginForm.get('password')?.value as string;

    this.loginService.login(formData).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        switch (response.data?.role!!.toString()) {
          case "ADMIN":
            localStorage.setItem('userProfileId', response.data.id!!.toString());
            this.router.navigate(['/admin']);
            break;

          case "TRAINER":
            localStorage.setItem('userProfileId', response.data.id!!.toString());
            this.router.navigate(['/trainer']);
            break;

          case "USER":
            localStorage.setItem('userProfileId', response.data.id!!.toString());
            this.router.navigate(['/user']);
            break;
        }
      },
      (error) => {
        console.error('Error submitting the form', error);
      }
    );
  }


  register() {
    // Navigate to the login page
    this.router.navigate(['auth/registration']);
  }
}
