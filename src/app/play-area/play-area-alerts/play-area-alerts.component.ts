import { Component, OnInit } from '@angular/core';
import { Datum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';

@Component({
  selector: 'app-play-area-alerts',
  templateUrl: './play-area-alerts.component.html',
  styleUrls: ['./play-area-alerts.component.scss']
})
export class PlayAreaAlertsComponent implements OnInit {

  playareas : IPlayAreaRoot;
  data: Datum[];

  constructor(private _svc : PlayAreaService) { }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.playareas = result);
  }

  alertSearch() {
    this.data = [];
    for (let index = 0; index < this.playareas.data.length; index++) {
      let element = this.playareas.data[index];
      if (element.opmerking) {
        this.data.push(element);
      }
    }
  }
}
