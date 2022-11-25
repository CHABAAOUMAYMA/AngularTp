import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';

const routes: Routes = [
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  { path: 'adresse', component: AdresseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
