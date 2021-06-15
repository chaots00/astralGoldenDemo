import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique.service';
import { Boutique } from '../boutique';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html', 
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
public boutique:Boutique[]=[];
  constructor(private readonly _boutiqueService:BoutiqueService) { }

  ngOnInit(): void {
    this.boutique = this._boutiqueService.getAll();
  }

}
