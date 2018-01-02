import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAreaMapComponent } from './play-area-map.component';

describe('PlayAreaMapComponent', () => {
  let component: PlayAreaMapComponent;
  let fixture: ComponentFixture<PlayAreaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAreaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
