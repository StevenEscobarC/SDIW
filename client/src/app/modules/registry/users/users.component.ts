import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  fgValidation: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router, private http: HttpClient) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  registryEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let n = this.fg.name.value;
      let p = this.fg.password.value;
      let ln = this.fg.last_name.value;
      let e = this.fg.email.value;
      let ph = this.fg.phone.value;


      this.secService.registryUser(n, p, ln, e, ph).subscribe(data => {

        if (data != null) {
          console.log(data);
          this.router.navigate(['/home'])
          this.secService.saveLoginInfo(data);
        } else {
          openPlatformModalMessage("¡La información no es valida!")
        }
      });
  }
  }
  ngOnInit() {
    this.fgValidationBuilder();
  }
  get fg() {
    return this.fgValidation.controls;
  }

}
