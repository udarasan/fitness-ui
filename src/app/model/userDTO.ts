export class UserDTO {
  id?: number;
  email?:String;
  username?:String;
  role?:UserRole;
  password?:String;
}

export class UserProfileRequest {
  email?:String;
  username?:String;
  password?:String;
  role?:UserRole;
}


export class UserProfileUpdateRequest {
  email?:String;
  username?:String;
  password?:String;
  id?: number;
}

export class LoginRequest {
  email?: String;
  password?:String;
}

export enum UserRole {
  ADMIN,
  TRAINER,
  USER
}

export class Summary{
  users?:number;
  traines?:number;
}
