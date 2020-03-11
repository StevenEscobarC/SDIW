import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyModel } from '../models/property.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  searchProperty(id: String): Observable<PropertyModel>{
    return this.http.get<PropertyModel>(`${this.url}/${id}`)
  }

  
  updateProperty(a: String, p: String, ph: String, tp : String, 
    tp2: String, cs:String, dep: String, c: String,id:String): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${this.url}/${id}/replace`,
      {
        address: a,
        price: p,
        photography: ph,
        offerType: tp,
        type: tp2,
        contactSeller: cs,
        department: dep,
        city: c


      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }
}
