import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot, DogDatum } from '../../services/dogpark.service';
import * as _ from "lodash";
import { reject } from 'q';


@Component({
  selector: 'app-dog-park-spotlight',
  templateUrl: './dog-park-spotlight.component.html',
  styleUrls: ['./dog-park-spotlight.component.scss']
})
export class DogParkSpotlightComponent implements OnInit {
  spotlight: DogDatum;
  data: DogDatum[];
  lat = 51.211708;
  lng = 4.412532;
  zoom: number;  
  SpotlightTitle : String = "Featured"
  constructor(private _svc: DogParkService) {
    this.zoom = 13;
    this._svc.getList().subscribe(result => this.Spotlight(result));
  }
  ngOnInit() {    
  }
   Spotlight(result : IDogParkRoot) { 
    this.data = [];
    for (let index = 0; index < result.data.length; index++) {
      let element = result.data[index];
      if (element.bezoekersaantal == "zeer hoog") {
        element.latitude = Number(element.point_lat);
        element.longitude = Number(element.point_lng);
        this.data.push(element);
      }
    }
    this.spotlight = this.data[4]
    this.lat = Number(this.spotlight.point_lat);
    this.lng = Number(this.spotlight.point_lng);
  }
}