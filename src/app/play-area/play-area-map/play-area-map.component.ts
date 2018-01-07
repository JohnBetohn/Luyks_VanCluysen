import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { PlayDatum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';
import { AgmMarker } from '@agm/core/directives/marker';
import { IWeatherResult, WeatherService } from '../../services/weather.service';
import * as mathjs from "mathjs"

@Component({
  selector: 'app-play-area-map',
  templateUrl: './play-area-map.component.html',
  styleUrls: ['./play-area-map.component.scss']
})
export class PlayAreaMapComponent implements OnInit {

  constructor(private _svc : PlayAreaService, private _weather : WeatherService) { }

  latitude : number;
  longitude : number;
  zoom : number;
  playareas : IPlayAreaRoot;
  _search : string;
  latitudemark : number;
  longitudemark : number;
  marker : AgmMarker;
  weather : IWeather;
  loc : number[]

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
        this.latitude =  (Number(element.point_lat));
        this.longitude =  (Number(element.point_lng));
        this.latitudemark =  (Number(element.point_lat));
        this.longitudemark =  (Number(element.point_lng));
        this._weather.getCurrentWeatherAt(this.latitude, this.longitude).subscribe(result => this.weather = this.WeatherResult(result));
      }
    }
  }

  private WeatherResult(result: IWeatherResult): IWeather{
    return {
      description: result.weather[0].description,
      temperature: +mathjs.unit(result.main.temp, "K").toNumber("degC").toFixed(1)
    };
  }

}

interface IWeather {
  description: string;
  temperature: number;
}