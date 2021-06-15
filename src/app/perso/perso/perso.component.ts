import { Component, OnInit } from '@angular/core';
import { Perso } from '../perso';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {
  public perso:Perso[]=[];
  constructor(private readonly _persoService:PersoService) { }

  ngOnInit(): void {
    this.perso = this._persoService.getAll();
  }

}
