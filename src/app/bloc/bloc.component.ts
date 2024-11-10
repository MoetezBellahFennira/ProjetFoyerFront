import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlocService } from '../service/bloc.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit{
  blocForm: FormGroup;
  blocs: any[] = [];
  constructor(private fb: FormBuilder, private blocService: BlocService) {
    this.blocForm = this.fb.group({
      nomBloc: [''],
      capaciteBloc: [''],
    });
  }
  ngOnInit(): void {
    this.fetchBlocs();
  }
  fetchBlocs(): void {
    this.blocService.getBlocs().subscribe(
      (data) => {
        this.blocs = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors du chargement des blocs :', error);
      }
    );
  }
  deleteBloc(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce bloc ?")) {
      this.blocService.deleteBloc(id).subscribe(
        () => {
          this.blocs = this.blocs.filter(bloc => bloc.idBloc !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du bloc :', error);
        }
      );
    }
  }



  onSubmit() {
    if (this.blocForm.valid) {
      this.blocService.addBloc(this.blocForm.value).subscribe(response => {
        console.log('Bloc ajouté avec succès', response);
      });
    }
  }
}
