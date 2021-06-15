import { Injectable } from '@angular/core';
import { Monstre } from '../monstre/monstre';
import { MonstreService } from '../monstre/monstre.service';
import { Perso } from '../perso/perso';
import { PersoService } from '../perso/perso.service';




@Injectable({
  providedIn: 'root'
})
export class CombatService {
  private MonstreService?:MonstreService
  private PersoService?:PersoService
  private _monstre?:Monstre
  private _perso?:Perso

 

  constructor() { }

 combat (monstreId:string){
  
 }
}
