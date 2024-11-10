import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UniversiteService } from '../service/universite.service';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universiteForm: FormGroup;
  universites: any[] = [];
  constructor(private fb: FormBuilder, private universiteService: UniversiteService) {
    this.universiteForm = this.fb.group({
      nomUniversite: [''],
      adresse: [''],
    });
  }
  ngOnInit(): void {
    this.fetchuniversites();
  }
  fetchuniversites(): void {
    this.universiteService.getuniversites().subscribe(
      (data) => {
        this.universites = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors du chargement des universites :', error);
      }
    );
  }
  deleteuniversite(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce universite ?")) {
      this.universiteService.deleteuniversite(id).subscribe(
        () => {
          this.universites = this.universites.filter(universite => universite.iduniversite !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du universite :', error);
        }
      );
    }
  }



  onSubmit() {
    if (this.universiteForm.valid) {
      this.universiteService.adduniversite(this.universiteForm.value).subscribe(response => {
        console.log('universite ajouté avec succès', response);
      });
    }
  }
}
