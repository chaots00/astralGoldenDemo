import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/monstre/monstre';
import { MonstreService } from 'src/app/monstre/monstre.service';
import { Perso } from 'src/app/perso/perso';
import { PersoService } from 'src/app/perso/perso.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  ngOnInit(): void {
  }

  //test division reste win celui qui a moin de reste
  degaMonstre :number=10;
  pvMonstre: number=50;
  degaJoueur:number=20;
  pvJoueur:number=100;
  resultm?:number;
  resultj?:number;
combat(){
 this.resultm= this.pvMonstre/this.degaJoueur 
 this.resultj= this.pvJoueur/this.degaMonstre
  console.log("m",this.resultm,"j",this.resultj)
  if(this.resultm < this.resultj){
    alert("win");
  }
    else{
alert("lose");
  }
}
}
