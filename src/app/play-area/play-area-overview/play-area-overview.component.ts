import { Component, OnInit } from '@angular/core';
import { PlayDatum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';

@Component({
  selector: 'app-play-area-overview',
  templateUrl: './play-area-overview.component.html',
  styleUrls: ['./play-area-overview.component.scss']
})
export class PlayAreaOverviewComponent implements OnInit {

  playareas : IPlayAreaRoot;
  data: PlayDatum[];
  _search : string;

  constructor(private _svc : PlayAreaService) { }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.playareas = result);
  }

  playAreaSearch(){
    this.data = [];
    for (let index = 0; index < this.playareas.data.length; index++) {
      let element = this.playareas.data[index];
      if(this._search == element.naam || this._search == element.district || this._search == element.postcode || this._search == element.straat){
        this.data.push(element);
      } //else this.data = this.playareas.data;
    }
  }

  get Search() {
    return this._search;
  }

  set Search(value: string) {
    this._search = value;
    this.playAreaSearch();
  }
}
