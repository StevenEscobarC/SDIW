import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean;
  userName: String;
  constructor(private secService: SecurityService) { }

  ngOnInit() {

    this.verifyUserSession();


  }

  verifyUserSession() {
    let user = this.secService.isUserLogged();
    this.userName = user.name;
    this.userLogged = user.logged;
  }

}
