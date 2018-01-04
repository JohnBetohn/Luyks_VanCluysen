import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot, DogDatum } from '../../services/dogpark.service';
import * as _ from "lodash";


@Component({
  selector: 'app-dog-park-spotlight',
  templateUrl: './dog-park-spotlight.component.html',
  styleUrls: ['./dog-park-spotlight.component.scss']
})
export class DogParkSpotlightComponent implements OnInit {
  spotlight: DogDatum;
  data: DogDatum[];
  dogparks: IDogParkRoot;
  lat=  51.211708;
  lng= 4.412532;

  zoom : number;
  
  constructor(private _svc: DogParkService) { 
    this.zoom = 13;
    
  }
 ngOnInit() {
  this._svc.getList().subscribe(result => this.dogparks = result); 
 }
 Spotlight() {  
   
    this.data = [];    
     for (let index = 0; index < this.dogparks.data.length; index++) {
      let element =  this.dogparks.data[index];
      if (element.bezoekersaantal == "zeer hoog") {
        element.latitude = Number(element.point_lat);
        element.longitude = Number(element.point_lng);
        this.data.push(element);
      }
    }
    this.spotlight = this.data[0]
    this.lat = Number(this.spotlight.point_lat);
    this.lng = Number(this.spotlight.point_lng);
  }
  }