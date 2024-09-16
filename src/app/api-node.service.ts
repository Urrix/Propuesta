import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  private apiUrl = 'http://localhost:3000/api';  // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Método GET
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
}
