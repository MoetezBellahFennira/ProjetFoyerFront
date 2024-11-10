import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlocComponent } from './bloc/bloc.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FoyerComponent } from './foyer/foyer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ChambreComponent } from './chambre/chambre.component';
import { UniversiteComponent } from './universite/universite.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'etudiant',component:EtudiantComponent},
  {path: 'bloc',component:BlocComponent},
  {path: 'foyer',component:FoyerComponent},
  {path: 'reservation',component:ReservationComponent},
  {path: 'universite',component:UniversiteComponent},
  {path: 'chambre',component:ChambreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
