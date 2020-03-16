import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { CityModel } from 'src/app/models/cityModel.model';



declare var initMaterializeSelect: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  departmentList: DepartmentModel[];
  cityList: CityModel[];
  subscription: Subscription;
  fgValidation: FormGroup;
  propertyList: PropertyModel[] = [];
  filterPostRequest="";
  filterPostProperty="";
  constructor(private serDepartment: DepartmentService, private fb: FormBuilder, private serProperty: PropertyService) { }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      tipo: ['', []],
      tipo2: ['', []],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

  filterType() {
    this.serProperty.loadPropertiesByType(this.fg.tipo.value).subscribe(data => {
      this.propertyList = data;
      
    });
  }

  filterType2() {
    this.serProperty.loadPropertiesByType2(this.fg.tipo2.value).subscribe(data => {
      this.propertyList = data;
    });
  }

  ngOnInit() {
    this.fgValidationBuilder();
    this.loadMyProperties();
    this.loadAllDepartments();
  }

  loadMyProperties() {
    this.serProperty.loadAllMyProperties().subscribe(data => {
      this.propertyList = data;
    });
  }

  loadAllDepartments() {
    this.subscription = this.serDepartment.loadAllDepartments().subscribe(data => {
      this.departmentList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }

  loadCitiesOfDepartment() {
    let department = this.fg.department.value;
    this.subscription = this.serDepartment.loadCitiesOfDep(department).subscribe(data => {
      this.cityList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 600);
    })

  }

  get fg() {
    return this.fgValidation.controls;
  }
}
