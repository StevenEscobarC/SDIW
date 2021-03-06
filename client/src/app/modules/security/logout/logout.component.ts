import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private secService: SecurityService, private router: Router) { }

  ngOnInit() {
    this.secService.logoutUser().subscribe(data => {
      if (data) {
        
        this.router.navigate(['/home']);
      }else{
        alert("No se pudo cerrar la sesión.")
      }
    });
  }

}
