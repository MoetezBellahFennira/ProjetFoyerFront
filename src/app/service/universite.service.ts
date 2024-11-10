import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/univeristes';

  constructor(private http: HttpClient) {}

  adduniversite(universiteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUniversity`, universiteData);
  }
  getuniversites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllUniversities`);
  }
  deleteuniversite(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeuniversite/${id}`);
  }
}
