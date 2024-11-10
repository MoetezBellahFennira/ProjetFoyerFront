import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  reservations: any[] = [];
  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.fb.group({
      IDreservation: [''],
      LocalDate: [''],
      vraiOuFaux: [''],
    });
  }
  ngOnInit(): void {
    this.fetchreservations();
  }
  fetchreservations(): void {
    this.reservationService.getreservations().subscribe(
      (data) => {
        this.reservations = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors du chargement des reservations :', error);
      }
    );
  }
  



  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.addreservation(this.reservationForm.value).subscribe(response => {
        console.log('reservation ajouté avec succès', response);
      });
    }
  }
}
