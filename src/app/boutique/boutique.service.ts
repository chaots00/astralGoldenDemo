import { Injectable } from '@angular/core';
import { Boutique } from './boutique';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private _key:string = "boutiques";
private _boutique: Boutique[] = [{
  id:uuidv4(), nom:"test", dega:10, prix_vente:10, prix_achat:10, nombre_poseder:10,
}];
  constructor() { 
   // this._initalizationItem()
  }

  getAll(): Boutique[] {
    return this._boutique;
  }
  get(boutiqueId:string): Boutique|null{
    return this._boutique.find(u => u.id === boutiqueId) || null;
  }

  additem(boutique:Boutique):void {
    boutique.id=uuidv4();
    this._boutique.push(boutique);
    this._saveBoutique();
  }

 
  removeItem(boutiqueId:string){
    const index = this._boutique.findIndex(u => u.id == boutiqueId );
    if(index !== -1){
      this._boutique.splice(index,1);
    }
  }
  updateItem(boutique:Boutique){
    const index = this._boutique.findIndex(u => u.id == boutique.id );
    if(index !== -1){
      this._boutique[index] = boutique;
      this._saveBoutique();
    }
  }
  private _saveBoutique(){
    try{
  const users = JSON.stringify(this._boutique);
  localStorage.setItem(this._key,users);
    }catch(e){
  console.error(e);
    }
  }

 /* private _initalizationItem():void{
    const item = localStorage.getItem(this._key);
    try{
      this._boutique = item !=null ? JSON.parse(item):[];
    }catch(e){
      console.error(e);
    }
    }*/
}
