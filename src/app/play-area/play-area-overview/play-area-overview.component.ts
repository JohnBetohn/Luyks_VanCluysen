import { Component, OnInit } from '@angular/core';
import { Datum, PlayAreaService, IPlayAreaRoot } from '../../services/play-area.service';

@Component({
  selector: 'app-play-area-overview',
  templateUrl: './play-area-overview.component.html',
  styleUrls: ['./play-area-overview.component.scss']
})
export class PlayAreaOverviewComponent implements OnInit {

  playareas : IPlayAreaRoot;

  constructor(private _svc : PlayAreaService) { }

  ngOnInit() {
    this._svc.getList().subscribe(result => this.playareas = result);
  }

}
