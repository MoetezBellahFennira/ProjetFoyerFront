import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiantForm: FormGroup;
  etudiants: any[] = [];

  constructor(private fb: FormBuilder, private etudiantService: EtudiantService) {
    this.etudiantForm = this.fb.group({
      nomEtudiant: [''],
      prenomEtudiant: [''],
      cinEtudiant: [''],
      dateNaissance: ['']
    });
  }

  ngOnInit(): void {
    this.fetchetudiants();
  }

  fetchetudiants(): void {
    this.etudiantService.getetudiants().subscribe(
      (data) => {
        this.etudiants = data;
        console.log('Étudiants chargés :', data);
      },
      (error) => {
        console.error('Erreur lors du chargement des étudiants :', error);
      }
    );
  }

  deleteetudiant(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
      this.etudiantService.deleteetudiant(id).subscribe(
        () => {
          this.etudiants = this.etudiants.filter(etudiant => etudiant.idetudiant !== id);
          console.log('Étudiant supprimé avec succès');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l’étudiant :', error);
        }
      );
    }
  }
  onSubmit() {
    if (this.etudiantForm.valid) {
      const formData = [{
        ...this.etudiantForm.value,
        cinEtudiant: Number(this.etudiantForm.value.cinEtudiant), // Assurez-vous que c'est un nombre
        dateNaissance: new Date(this.etudiantForm.value.dateNaissance).toISOString().split('T')[0] // Format YYYY-MM-DD
      }];
  
      console.log('Données envoyées :', formData);
  
      this.etudiantService.addetudiant(formData).subscribe(
        (response) => {
          console.log('Étudiants ajoutés avec succès', response);
          this.fetchetudiants(); // Rafraîchir la liste
          this.etudiantForm.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          console.error('Erreur lors de l’ajout des étudiants :', error);
        }
      );
    }
  }
  
  
}
