import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChambreService } from '../service/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambreForm: FormGroup;
  chambres: any[] = [];
  constructor(private fb: FormBuilder, private chambreService: ChambreService) {
    this.chambreForm = this.fb.group({
      numeroChambre: [''],
      typeChambre: [''],
    });
  }
  ngOnInit(): void {
    this.fetchchambres();
  }
  fetchchambres(): void {
    this.chambreService.getchambres().subscribe(
      (data) => {
        this.chambres = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors du chargement des chambres :', error);
      }
    );
  }
  deletechambre(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce chambre ?")) {
      this.chambreService.deletechambre(id).subscribe(
        () => {
          this.chambres = this.chambres.filter(chambre => chambre.idchambre !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du chambre :', error);
        }
      );
    }
  }



  onSubmit() {
    if (this.chambreForm.valid) {
      this.chambreService.addchambre(this.chambreForm.value).subscribe(response => {
        console.log('chambre ajouté avec succès', response);
      });
    }
  }
}
