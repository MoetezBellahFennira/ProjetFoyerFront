import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/etudiants';

  constructor(private http: HttpClient) {}

  addetudiant(etudiantData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addEtudiants`, etudiantData);
  }
  getetudiants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllEtudiants`);
  }
  deleteetudiant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeEtudiant/${id}`);
  }
}
