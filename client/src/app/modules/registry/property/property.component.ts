import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var initMaterializeSelect: any;
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  fgValidation: FormGroup;
  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router, private http: HttpClient) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      price: ['', [Validators.required]],
      photography: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    initMaterializeSelect()
    this.fgValidationBuilder();
  }

  registryEvent(){
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let a = this.fg.address.value;
      let p = this.fg.price.value;
      //let ln = this.fg.last_name.value;
      //let e = this.fg.email.value;
      let ph = this.fg.photography.value;


      this.secService.registryProperty(a, p, ph).subscribe(data => {

        if (data != null) {
          console.log(data);
          this.router.navigate(['/home'])
        } 
      });
  }
  }

  get fg() {
    return this.fgValidation.controls;
  }

}
