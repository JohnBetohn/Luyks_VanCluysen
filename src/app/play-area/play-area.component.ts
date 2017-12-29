import { Component, OnInit } from '@angular/core';
import { Datum, PlayAreaService, IPlayAreaRoot } from '../services/play-area.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit {

  playareas : IPlayAreaRoot;

  constructor(private _svc : PlayAreaService) { }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.playareas = result);
  }

}
