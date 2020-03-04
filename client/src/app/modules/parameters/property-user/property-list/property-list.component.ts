import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertyList: PropertyModel[] = [];
  constructor(private serProperty: PropertyService) { }

  ngOnInit() {
  }

  loadMyProperties(){
    this.serProperty.loadAllMyProperties().subscribe(data => {
      this.propertyList = data;
    });
  }

}
