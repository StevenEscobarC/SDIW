import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { Subscription } from 'rxjs';
import { DepartmentModel } from 'src/app/models/departmentModel.model';
import { CityModel } from 'src/app/models/cityModel.model';
import { PropertyTypeService } from 'src/app/services/property-type.service';
import { TypeModel } from 'src/app/models/typeModel.model';
import { UserModel } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';



declare var initMaterializeSelect: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  departmentList: DepartmentModel[];
  cityList: CityModel[];
  typeList: TypeModel[];
  userInfo: UserModel;
  subscription: Subscription;
  propertyList: PropertyModel[] = [];
  filterType = "";
  filterOT = "";
  constructor(private serProperty: PropertyService, private secService: SecurityService, private router: Router,
    private serType: PropertyTypeService, private serRequest: RequestService) { }



  ngOnInit() {
    this.verifyUserSession();
    this.loadProperties();
    this.loadAllType();
  }

  loadProperties() {
    this.serProperty.loadAllProperties().subscribe(data => {
      this.propertyList = data;
    });
  }

  sendRequest(property: PropertyModel) {
    this.serRequest.createRequest(property, this.userInfo.email).subscribe(data => {
      if (data != null) {
        this.serType.sendEmail(this.userInfo, property).subscribe(data => {
          if (data != null) {

            this.router.navigate(['/request/request-list'])
          }
        });
      }
    })
  }


  loadAllType() {
    this.subscription = this.serType.loadAllTypes().subscribe(data => {
      this.typeList = data;
      setTimeout(() => {
        initMaterializeSelect()
      }, 500);
    })
  }
  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;


    });

  }
}
