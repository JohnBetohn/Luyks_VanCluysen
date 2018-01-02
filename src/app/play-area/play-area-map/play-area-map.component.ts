import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Datum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';
import { AgmMarker } from '@agm/core/directives/marker';

@Component({
  selector: 'app-play-area-map',
  templateUrl: './play-area-map.component.html',
  styleUrls: ['./play-area-map.component.scss']
})
export class PlayAreaMapComponent implements OnInit {

  constructor(private _svc : PlayAreaService) { }

  latitude : number;
  longitude : number;
  zoom : number;
  playareas : IPlayAreaRoot;
  _search : string;
  latitudemark : number;
  longitudemark : number;
  marker : AgmMarker;

  ngOnInit() {
    this._svc.getList().subscribe(result => this.playareas = result);
    this.latitude = 51.215097;
    this.longitude = 4.412771;
    this.zoom = 13;
  }

  get Search() {
    return this._search;
  }

  set Search(value: string) {
    this._search = value;
    this.playAreaSearch();
  }

  playAreaSearch(){
    for (let index = 0; index < this.playareas.data.length; index++) {
      const element = this.playareas.data[index];
      if(this._search == element.naam){
        this.latitudemark = +element.x_coord;
        this.longitudemark = +element.y_coord;
      }
    }
    this.marker.latitude = this.latitudemark;
    this.marker.longitude = this.longitudemark;
  }

}
