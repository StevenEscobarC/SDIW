import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  url: String = "http://localhost:3000/api/Users/"


  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) { }


  getUserInfo() {
    return this.userInfo.asObservable();
  }




  /*cambiar con loopback */


  loginUser(username: String, pass: String): Observable<UserModel> {
    /**let user = null
    if (username == "admin@gmail.com" && pass == "12345678") {
      user = new UserModel();
      user.firstName = "Steven";
      user.firstLastName = "Escobar";
      user.secondLastName = "Castaño";
      user.email = "admin@gmail.com";
      user.isLogged = true;
      this.userInfo.next(user);
    }*/
    return this.http.post<UserModel>(`${this.url}login?include=User`, 
    {
      email: username,
      password: pass

    }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })
  }

  logoutUser() {


  }

}
