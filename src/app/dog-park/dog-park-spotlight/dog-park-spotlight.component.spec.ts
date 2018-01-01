import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogParkSpotlightComponent } from './dog-park-spotlight.component';

describe('DogParkSpotlightComponent', () => {
  let component: DogParkSpotlightComponent;
  let fixture: ComponentFixture<DogParkSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogParkSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogParkSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
