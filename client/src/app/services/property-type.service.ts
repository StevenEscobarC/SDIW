import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeModel } from '../models/typeModel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  url: String = "http://localhost:3000/api/propertyTypes"
  constructor(private http: HttpClient) { }

  
  loadAllTypes(): Observable<TypeModel[]> {
    return this.http.get<TypeModel[]>(`${this.url}`)
  }

  createType(name: String): Observable<TypeModel> {
    return this.http.post<TypeModel>(`${this.url}`,
      {
        name: name

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  updateType(name: String, id: String): Observable<TypeModel> {
    return this.http.post<TypeModel>(`${this.url}/${id}/replace`,
      {
        name: name
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  searchType(id: String): Observable<TypeModel>{
    return this.http.get<TypeModel>(`${this.url}/${id}`)
  }
}
