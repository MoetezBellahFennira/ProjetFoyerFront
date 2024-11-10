import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/blocs';

  constructor(private http: HttpClient) {}

  addBloc(blocData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addBloc`, blocData);
  }
  getBlocs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveBlocs`);
  }
  deleteBloc(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeBloc/${id}`);
  }
}