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
  data: Datum[];
  lat=  51.211708;
  lng= 4.412532;
  constructor(private _svc: DogParkService) {   
   }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
   }
markMap(){
  for (let index = 0; index < this.dogparks.data.length; index++) {
    let element = this.dogparks.data[index];
      this.data.push(element);
      this.lat = (Number(element.point_lat));
      this.lng = (Number(element.point_lng));
  }
}
}
