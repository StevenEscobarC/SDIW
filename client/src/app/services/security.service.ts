import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  
  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor() { }


  getUserInfo() {
    return this.userInfo.asObservable();
  }




  /*cambiar con loopback */


  loginUser(username: String, pass: String) {
    let user = null
    if (username == "admin@gmail.com" && pass == "12345678") {
      user = new UserModel();
      user.firstName = "Steven";
      user.firstLastName = "Escobar";
      user.secondLastName = "Castaño";
      user.email = "admin@gmail.com";
      user.isLogged = true;
      this.userInfo.next(user);
    }
    return user;
  }

  logoutUser(){

    
  }

}
