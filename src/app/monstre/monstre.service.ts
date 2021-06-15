import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Monstre } from './monstre';

@Injectable({
  providedIn: 'root'
})
export class MonstreService {
  private _monstre: Monstre[]=[{
id:'test',nom:'test',pv:10,gold:10,dega:10,exp:10
  }];

  constructor() { }


  getAll(): Monstre[] {
    return this._monstre;
  }
  get(monstreId:string): Monstre|null{
    return this._monstre.find(u => u.id === monstreId) || null;
  }

  
}
