import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginRequest, UserDTO} from "../model/userDTO";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(userDTO:LoginRequest): Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/userProfile/login",{
      "email":userDTO.email,
      "password":userDTO.password,
    })
  }
  registration(userDTO:UserDTO): Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/userProfile",{
      "name":userDTO.username,
      "email":userDTO.email,
      "password":userDTO.password,
      "role":userDTO.role
    })
  }
}
