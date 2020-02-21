import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/cityModel.model';


declare var initMaterializeSelect: any;

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  departmentList: DepartmentModel[];
  cityList: CityModel[];
  userInfo: UserModel;
  subscription: Subscription;
  fgValidation: FormGroup;
  
  
  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router, 
     http: HttpClient, private serDepartment: DepartmentService, private serCity: CityService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      price: ['', [Validators.required]],
      photography: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      tipo2: ['', [Validators.required]],
      department:['',[Validators.required]],
      city:['',[Validators.required]]
    });
  }


  ngOnInit() {
    this.fgValidationBuilder();
    this.verifyUserSession();
    this.loadAllDepartments();
    
  }
  

  registryEvent() {
    if (this.fgValidation.invalid) {
      alert("Datos inválidos!!");
    } else {
      let a = this.fg.address.value;
      let p = this.fg.price.value;
      let tp = this.fg.tipo.value;
      let tp2 = this.fg.tipo2.value;
      let ph = this.fg.photography.value;
      let cs = ` ${this.userInfo.firstName} ${this.userInfo.firstLastName} - ${this.userInfo.phone}`;
      let dep = this.fg.department.value;
      let c = this.fg.city.value;


      this.secService.registryProperty(a, p, ph, tp, tp2,cs, dep, c).subscribe(data => {

        if (data != null) {
          console.log(data);
          this.router.navigate(['/home'])
        }
      });
    }
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;

    });
  }

  loadAllDepartments(){
    this.subscription= this.serDepartment.loadAllDepartments().subscribe(data=>{
      this.departmentList=data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }
  
  loadCitiesOfDepartment() {
    let department = this.fg.department.value;
    this.subscription= this.serCity.loadAllCities().subscribe(data=>{
      this.cityList=data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 600);
    })

  }

  get fg() {
    return this.fgValidation.controls;
  }

}
