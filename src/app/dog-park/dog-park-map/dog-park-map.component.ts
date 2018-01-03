import { Component, OnInit } from '@angular/core';
import NgMap from 'ngmap';
import { DogDatum, IDogParkRoot, DogParkService } from '../../services/dogpark.service';
@Component({
  selector: 'app-dog-park-map',
  templateUrl: './dog-park-map.component.html',
  styleUrls: ['./dog-park-map.component.scss']
})
export class DogParkMapComponent implements OnInit {
  dogparks: IDogParkRoot;
  datamap: DogDatum[];
  lat=  51.211708;
  lng= 4.412532;
  latmap: Number[];
  lngmap: Number[];
  zoom : number;
  
  geolocationPosition;
  constructor(private _svc: DogParkService) { 
    this.zoom = 16;  
   }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
    
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
            this.lat = position.coords.latitude,
            this.lng = position.coords.longitude,
            this.geolocationPosition = position,
                  console.log(position)
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };
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
