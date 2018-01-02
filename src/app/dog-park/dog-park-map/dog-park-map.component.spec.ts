import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogParkMapComponent } from './dog-park-map.component';

describe('DogParkMapComponent', () => {
  let component: DogParkMapComponent;
  let fixture: ComponentFixture<DogParkMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogParkMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogParkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
