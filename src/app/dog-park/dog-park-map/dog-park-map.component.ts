import { Component, OnInit, NgZone } from '@angular/core';
import NgMap from 'ngmap';
import { DogDatum, IDogParkRoot, DogParkService } from '../../services/dogpark.service';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { MapsService } from '../../services/map.service'
declare var google: any;
@Component({
  selector: 'app-dog-park-map',
  templateUrl: './dog-park-map.component.html',
  styleUrls: ['./dog-park-map.component.scss']
})
export class DogParkMapComponent implements OnInit {
  dogparks: IDogParkRoot;
  datamap: DogDatum[];
  lat = 51.211708;
  lng = 4.412532;
  latmap: Number[];
  lngmap: Number[];
  zoom: number;
  closest: DogDatum;
  constructor(private _svc: DogParkService
    , private _loader: MapsAPILoader,
    private _zone: NgZone,
    private _mapsService: MapsService) {
    this.zoom = 16;
  }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
    this.callCurrentPosition();
  }

  callCurrentPosition() {
    this._mapsService.getCurrentPosition().subscribe(
      position => {
        this._zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        });
      }
    );
  }
  Deg2Rad(deg) {
    return deg * Math.PI / 180;
  }
  PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
    lat1 = this.Deg2Rad(lat1);
    lat2 = this.Deg2Rad(lat2);
    lon1 = this.Deg2Rad(lon1);
    lon2 = this.Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }
  getClosest() {
    this.datamap = [];
    for (let index = 0; index < this.dogparks.data.length; index++) {
      let element = this.dogparks.data[index];
      element.latitude = Number(element.point_lat);
      element.longitude = Number(element.point_lng);
      this.datamap.push(element);
      var mindif = 99999;
      for (let index = 0; index < this.dogparks.data.length; ++index) {
        let element = this.dogparks.data[index];
        var dif = this.PythagorasEquirectangular(this.lat, this.lng, element.latitude, element.longitude);
        if (dif < mindif) {
          this.closest = element;
          mindif = dif;
        }
      }
    }
    this.lat = this.closest.latitude;
    this.lng = this.closest.longitude;
  }
}