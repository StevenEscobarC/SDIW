import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  url: String = "http://localhost:3000/api/Users"


  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }

  verifyUserInSession() {
    let session = localStorage.getItem("activeUser");
    if (session != undefined) {
      this.userInfo.next(JSON.parse(session));
    }
  }

  isActiveSession() {
    return this.userInfo.getValue().isLogged;
  }


  getUserInfo() {
    return this.userInfo.asObservable();
  }





  loginUser(username: String, pass: String): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/login?include=User`,
      {
        email: username,
        password: pass

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })
  }

  saveLoginInfo(user: UserModel) {
    user.isLogged = true;
    this.userInfo.next(user);
    localStorage.setItem("activeUser", JSON.stringify(user));
  }


  logoutUser() {
    localStorage.removeItem("activeUser");
    this.userInfo.next(new UserModel());
  }
  registryUser(n: String, p: String, ln: String, e: String, ph: String): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.url}`,
    {
      email: e,
      password: p,
      firstLastName: ln,
      firstName: n,
      phone:ph

    }, {
    headers: new HttpHeaders({
      "content-type": "application/json"
    })
  })

  }
}
