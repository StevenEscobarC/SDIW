import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/app/models/requestModel.model';
import { RequestService } from 'src/app/services/request.service';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
declare var openConfirmationModal: any;

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
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
    this.serRequest.loadMyRequest(this.userInfo.email).subscribe(data => {
      this.requestList = data;
    });
  }
  openConfirmation(code) {
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeRequest() {
    this.serRequest.deleteRequest(this.codeToRemove);
    this.loadMyRequest();
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {

      this.userInfo = user;


    });

  }
}
