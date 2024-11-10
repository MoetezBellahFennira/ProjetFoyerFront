import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlocComponent } from './bloc/bloc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FoyerComponent } from './foyer/foyer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ChambreComponent } from './chambre/chambre.component';
import { UniversiteComponent } from './universite/universite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlocComponent,
    EtudiantComponent,
    FoyerComponent,
    ReservationComponent,
    ChambreComponent,
    UniversiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
