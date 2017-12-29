import { Component, OnInit } from '@angular/core';
import { DogParkService, IDogParkRoot } from '../services/dogpark.service'

@Component({
  selector: 'app-dog-park',
  templateUrl: './dog-park.component.html',
  styleUrls: ['./dog-park.component.scss']
})
export class DogParkComponent implements OnInit {
  lijst : IDogParkRoot[];
  constructor(private service : DogParkService) { 
  }
  ngOnInit() {
    this.service.Lijst.subscribe(d => this.lijst = d);
  }
}
