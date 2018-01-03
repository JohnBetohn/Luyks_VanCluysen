import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAreaWeatherComponent } from './play-area-weather.component';

describe('PlayAreaWeatherComponent', () => {
  let component: PlayAreaWeatherComponent;
  let fixture: ComponentFixture<PlayAreaWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAreaWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
