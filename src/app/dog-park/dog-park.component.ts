import { Component, OnInit } from '@angular/core';
import { DogDatum, DogParkService, IDogParkRoot } from '../services/dogpark.service'

@Component({
  selector: 'app-dog-park',
  templateUrl: './dog-park.component.html',
  styleUrls: ['./dog-park.component.scss']
})
export class DogParkComponent implements OnInit {
    dogparks : IDogParkRoot;
    data: DogDatum[];
    constructor(private _svc : DogParkService) { 
      this._svc.getList().subscribe(result => this.dogparks = result);
    }
    ngOnInit() {
      function Test() {
        this.data = [];
        for (let index = 0; index < this.dogparks.data.length; index++) {
          let  element = this.dogparks.data[index];
          if (element.postcode == '2610' || element.postcode != null) {
            this.data.push(element);
            console.log("Check" + index)
          }
        } 
      }
    }
  }
  
