import { Component, OnInit } from '@angular/core';
import { Quetes } from '../quetes';
import { QuetesService } from '../quetes.service';

@Component({
  selector: 'app-quetes',
  templateUrl: './quetes.component.html',
  styleUrls: ['./quetes.component.scss']
})
export class QuetesComponent implements OnInit {
public quetes:Quetes[]=[];
  constructor(private readonly _quetesService:QuetesService) { }

  ngOnInit(): void {
    this.quetes = this._quetesService.getAll();
  }

}
