import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot, DogDatum } from '../../services/dogpark.service';
import * as _ from "lodash";
@Component({
  selector: 'app-dog-park-random',
  templateUrl: './dog-park-random.component.html',
  styleUrls: ['./dog-park-random.component.scss']
})
export class DogParkRandomComponent implements OnInit {
  constructor(private _svc: DogParkService) {
    this.zoom = 13;
  }
  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
  }
  randompark: DogDatum;
  data: DogDatum[];
  dogparks: IDogParkRoot;
  lat = 51.2194475;
  lng = 4.40246430000002;
  zoom: number;
  getRandom() {
    this.data = [];
    for (let index = 0; index < this.dogparks.data.length; index++) {
      let element = this.dogparks.data[index];
      if (element.netheid == "goed" && element.bezoekersaantal != null) {
        element.latitude = Number(element.point_lat);
        element.longitude = Number(element.point_lng);
        this.data.push(element);
        console.log(this.lat, this.lng);
      }
    }
    this.randompark = this.data[_.random(0, this.data.length - 1)]
    this.lat = Number(this.randompark.point_lat);
    this.lng = Number(this.randompark.point_lng);
  }
}
