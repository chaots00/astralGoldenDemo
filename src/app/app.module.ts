import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { ClasementComponent } from './clasement/clasement.component';
import {TableModule} from 'primeng/table';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import {DataViewModule} from 'primeng/dataview';
import { BoutiqueComponent } from './boutique/boutique/boutique.component';
import { QuetesComponent } from './Quetes/quetes/quetes.component';
import { PersoComponent } from './perso/perso/perso.component';
import { CombatComponent } from './combat/combat/combat.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HomeComponent,
    ClasementComponent,
    MonstreComponent,
    BoutiqueComponent,
    QuetesComponent,
    PersoComponent,
    CombatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    TableModule,
    DataViewModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
