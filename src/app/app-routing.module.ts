import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique/boutique.component';
import { ClasementComponent } from './clasement/clasement.component';
import { CombatComponent } from './combat/combat/combat.component';
import { HomeComponent } from './home/home.component';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import { PersoComponent } from './perso/perso/perso.component';
import { QuetesComponent } from './Quetes/quetes/quetes.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "accueil",component:AccueilComponent },
  {path: "clasement",component:ClasementComponent },
  {path: "monstre",component:MonstreComponent },
  {path: "boutique",component:BoutiqueComponent },
  {path: "quetes",component:QuetesComponent },
  {path: "perso",component:PersoComponent },
  {path: "combat",component:CombatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
