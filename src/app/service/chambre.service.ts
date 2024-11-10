import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/chambres';

  constructor(private http: HttpClient) {}

  addchambre(chambreData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addChambre`, chambreData);
  }
  getchambres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllChambres`);
  }
  deletechambre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/retrieveChambre/${id}`);
  }
}
