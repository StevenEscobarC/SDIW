import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/requestModel.model';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';

declare var openConfirmationModal: any;
@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.css']
})
export class AdminRequestListComponent implements OnInit {

  requestModel: RequestModel;
  requestList: RequestModel[];
  codeToRemove: String;
  subscription: Subscription;
  userInfo: UserModel;
  constructor(private serRequest: RequestService, private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
    this.loadMyRequest();
  }


  loadMyRequest = () => {
    this.serRequest.loadAllRequest().subscribe(data => {
      this.requestList = data;
    });
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;


    });

  }

}
