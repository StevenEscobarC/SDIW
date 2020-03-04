import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyModel } from '../models/property.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  url: String = "http://localhost:3000/api/properties"

  constructor(private http: HttpClient) { }

  loadAllMyProperties():Observable<PropertyModel[]>
  {
    return this.http.get<PropertyModel[]>(`${this.url}`)
  }
}
