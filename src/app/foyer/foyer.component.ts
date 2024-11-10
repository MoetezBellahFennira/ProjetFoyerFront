import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit {
  foyerForm: FormGroup; // Déclaration sans initialisation directe
  foyers: any[] = [];  // Liste des foyers
  blocs: any[] = [];   // Liste des blocs

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService
  ) { 
    // Initialisation de foyerForm dans le constructeur
    this.foyerForm = this.fb.group({
      nomfoyer: ['', Validators.required],
      capaciteFoyer: ['', Validators.required],
      bloc: ['', Validators.required]  // Bloc est maintenant un champ requis
    });
  }

  ngOnInit(): void {
    this.fetchBlocs();
    this.fetchFoyers();
  }

  fetchBlocs() {
    this.foyerService.getBlocs().subscribe((blocs) => {
      this.blocs = blocs;
    });
  }

  fetchFoyers() {
    this.foyerService.getfoyers().subscribe((foyers) => {
      this.foyers = foyers;
    });
  }

  onSubmit() {
    if (this.foyerForm.valid) {
      const formData = {
        ...this.foyerForm.value,
        bloc: this.foyerForm.value.bloc // Ajout du bloc sélectionné
      };

      console.log('Données envoyées :', formData);

      this.foyerService.addfoyer(formData).subscribe(
        (response) => {
          console.log('Foyer ajouté avec succès', response);
          this.fetchFoyers();
          this.foyerForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l’ajout du foyer :', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  deletefoyer(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce foyer ?")) {
      this.foyerService.deleteFoyer(id).subscribe(
        () => {
          this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== id);
          console.log('Foyer supprimé avec succès');
        },
        (error) => {
          console.error('Erreur lors de la suppression du foyer :', error);
        }
      );
    }
  }
  
}
