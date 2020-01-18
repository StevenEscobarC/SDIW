import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  userLogged: boolean = false;
  name: String = '';

  constructor() { }


  isUserLogged() {
    return { logged: this.userLogged, name: this.name };
  }




  /*cambiar con loopback */


  loginUser(username: String, pass: String) {
    let user = null
    if (username == "admin@gmail.com" && pass == "12345678") {
      user = { name: 'admin', age: 20 };
      this.name = 'Admin';
      this.userLogged = true;
    }
    return user
  }

}
