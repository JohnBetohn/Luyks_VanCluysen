import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot, Datum } from '../../services/dogpark.service';

@Component({
  selector: 'app-dog-park-search',
  templateUrl: './dog-park-search.component.html',
  styleUrls: ['./dog-park-search.component.scss']
})
export class DogParkSearchComponent implements OnInit {
  dogparks : IDogParkRoot;
  data: Datum[];
  constructor(private _svc : DogParkService) { }
private _search: string = "Enter postcode"
  ngOnInit() {
    this._svc.getList().subscribe(result => this.dogparks = result);
  }
  searchPostcode() {
    this.data = [];
    for (let index = 0; index < this.dogparks.data.length; index++) {
      let element = this.dogparks.data[index];
      if (element.postcode == this._search || element.district == this._search || element.straatnaam == this._search) {
        this.data.push(element);
      }
    }
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    this.searchPostcode();
  }
}
