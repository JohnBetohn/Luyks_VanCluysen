import { Component, OnInit } from '@angular/core';
import { Datum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';

@Component({
  selector: 'app-play-area-alerts',
  templateUrl: './play-area-alerts.component.html',
  styleUrls: ['./play-area-alerts.component.scss']
})
export class PlayAreaAlertsComponent implements OnInit {

  allplayareas : IPlayAreaRoot;
  playareas : IPlayAreaRoot;
  data: Datum[];

  constructor(private _svc : PlayAreaService) { }

  ngOnInit() {
    this.data = [];
    this._svc.getList().subscribe(result => this.allplayareas = result);
    for (let index = 0; index < this.allplayareas.data.length; index++) {
      const element = this.allplayareas.data[index];
      if (element.opmerking.length > 1 || element.opmerking != null) {
        this.data.push(element);
      }
    }
  }
}
