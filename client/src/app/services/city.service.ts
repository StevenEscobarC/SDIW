import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityModel } from '../models/cityModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url: String = "http://localhost:3000/api/cities"
  constructor(private http: HttpClient) { }

  loadAllCities(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`${this.url}`)
  }

}


