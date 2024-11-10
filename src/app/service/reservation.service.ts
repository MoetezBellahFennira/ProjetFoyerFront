import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/reservations';

  constructor(private http: HttpClient) {}

  addreservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addreservation`, reservationData);
  }
  getreservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllReservation`);
  }
}

