import { Injectable } from '@angular/core';
import { Quetes } from './quetes';

@Injectable({
  providedIn: 'root'
})
export class QuetesService {
private _quetes:Quetes[] = [{
id:"test",ennoncer:"test",monstre:"test",lot:"test"
}]
  constructor() { }

  getAll(): Quetes[] {
    return this._quetes;
  }
  get(queteId:string): Quetes|null{
    return this._quetes.find(u => u.id === queteId) || null;
  }
}
