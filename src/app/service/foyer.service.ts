import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8082/tpFoyer17/api/foyers';

  constructor(private http: HttpClient) {}

  addfoyer(foyerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addFoyer`, foyerData);
  }
  getfoyers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllFoyers`);
  }
  // deletefoyer(idFoyer: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/removeFoyer/${idFoyer}`);
  // }
  deleteFoyer(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/tpFoyer17/api/foyers/removeFoyer/${id}`);
  }
  

  getBlocs(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8082/tpFoyer17/api/blocs/retrieveBlocs"); // Remplacez par le bon chemin pour récupérer les blocs
  }
}
