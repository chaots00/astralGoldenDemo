import { Injectable } from '@angular/core';
import { Perso } from './perso';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PersoService {
  private _perso: Perso[] = [{
    id:uuidv4(), pseudo:"test",mot_de_passe:"string",mail:"test",niveau:10,pv_max:10,pv:10, dega:10,main:"test",sac:["test"],
  }];

  constructor() { }

  getAll(): Perso[] {
    return this._perso;
  }

  get(persoId:string): Perso|null{
    return this._perso.find(u => u.id === persoId) || null;
  }
}
