import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot, Datum } from '../../services/dogpark.service';
import * as _ from "lodash";

@Component({
  selector: 'app-dog-park-spotlight',
  templateUrl: './dog-park-spotlight.component.html',
  styleUrls: ['./dog-park-spotlight.component.scss']
})
export class DogParkSpotlightComponent implements OnInit {
  spotlight: Datum;
  data: Datum[];
  dogparks: IDogParkRoot;
  constructor(private _svc: DogParkService) { 
        
  }

 ngOnInit() {
  this._svc.getList().subscribe(result => this.dogparks = result);
  }
  Spotlight() {
    this.data = [];    
     for (let index = 0; index < this.dogparks.data.length; index++) {
      let element = this.dogparks.data[index];
      if (element.netheid == "goed") {
        this.data.push(element);
      }
    }
    this.spotlight = this.data[_.random(0, this.data.length - 1)]
  }
  }
