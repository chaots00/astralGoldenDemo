import { Component, OnInit } from '@angular/core';
import { Monstre } from '../monstre';
import { MonstreService } from '../monstre.service';

@Component({
  selector: 'app-monstre',
  templateUrl: './monstre.component.html',
  styleUrls: ['./monstre.component.scss']
})
export class MonstreComponent implements OnInit {
  public monstres: Monstre[] = [];

  constructor(
    private readonly _monstreService: MonstreService
  ) { }

  ngOnInit(): void {
   this.monstres = this._monstreService.getAll();
  }

}
