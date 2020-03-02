import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../models/departmentModel.model';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  url2: String = "http://localhost:3000/api/departments"
  
  
  constructor(private http: HttpClient) {


  }

  loadAllDepartments(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(`${this.url2}`)
  }

  createDepartment(name: String, code: String): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(`${this.url2}`,
      {
        name: name,
        code: code

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  updateDepartment(name: String, code: String, id: String): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(`${this.url2}/${id}/replace`,
      {
        name: name,
        code: code,
        

      }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })

  }

  searchDepartment(id: String): Observable<DepartmentModel>{
    return this.http.get<DepartmentModel>(`${this.url2}/${id}`)
  }

}
