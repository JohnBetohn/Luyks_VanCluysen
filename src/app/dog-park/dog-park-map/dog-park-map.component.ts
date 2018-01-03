import { Component, OnInit } from '@angular/core';
import NgMap from 'ngmap';
import { Datum, IDogParkRoot, DogParkService } from '../../services/dogpark.service';
@Component({
  selector: 'app-dog-park-map',
  templateUrl: './dog-park-map.component.html',
  styleUrls: ['./dog-park-map.component.scss']
})
export class DogParkMapComponent implements OnInit {
  dogparks: IDogParkRoot;
  datamap: Datum[];
  lat=  51.211708;
  lng= 4.412532;
  latmap: Number[];
  lngmap: Number[];
  constructor(private _svc: DogParkService) {   
   }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
   }
markMap(){
  this.datamap = []; 
  for (let index = 0; index < this.dogparks.data.length; index++) {
    let element = this.dogparks.data[index];
    element.latitude = Number(element.point_lat);
    element.longitude = Number(element.point_lng);
    this.datamap.push(element);
  }
}
}
