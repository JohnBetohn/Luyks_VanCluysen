import { Component, OnInit } from '@angular/core';
import NgMap from 'ngmap';
import { DogDatum, IDogParkRoot, DogParkService } from './../services/dogpark.service';
import { PlayDatum, PlayAreaService, IPlayAreaRoot } from '../services/play-area.service';
@Component({
  selector: 'app-combomap',
  templateUrl: './combomap.component.html',
  styleUrls: ['./combomap.component.scss']
})
export class CombomapComponent implements OnInit {
  lat=  51.211708;
  lng= 4.412532;
  dogparks: IDogParkRoot;
  DogData : DogDatum[]
  playareas : IPlayAreaRoot;
  PlayData: PlayDatum[];
  constructor(private _Dogsvc: DogParkService, private _Playsvc: PlayAreaService) {
   }
  ngOnInit() {
    this._Dogsvc.getList().subscribe(result => this.dogparks = result);
    this._Playsvc.getList().subscribe(result => this.playareas = result);
  }
  markDogparks(){
    this.PlayData = [];
    this.DogData = [];
    for (let index = 0; index < this.dogparks.data.length; index++) {
      let element = this.dogparks.data[index];
      element.latitude = Number(element.point_lat);
      element.longitude = Number(element.point_lng);
      this.DogData.push(element);
    }
  }
  markPlayareas() {
    this.PlayData = [];
    this.DogData = [];
    for (let index = 0; index < this.playareas.data.length; index++) {
      let element = this.playareas.data[index];
      element.latitude = Number(element.point_lat);
      element.longitude = Number(element.point_lng);
      this.PlayData.push(element);
  }
}
markBoth() {
  for (let index = 0; index < this.playareas.data.length; index++) {
    let element = this.playareas.data[index];
    element.latitude = Number(element.point_lat);
    element.longitude = Number(element.point_lng);
    this.PlayData.push(element);
}
for (let index = 0; index < this.dogparks.data.length; index++) {
  let element = this.dogparks.data[index];
  element.latitude = Number(element.point_lat);
  element.longitude = Number(element.point_lng);
  this.DogData.push(element);
}
}
clear() {
  this.PlayData = [];
  this.DogData = [];
}
}
