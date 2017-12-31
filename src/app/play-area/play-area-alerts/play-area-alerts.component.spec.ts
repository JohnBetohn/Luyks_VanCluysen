import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAreaAlertsComponent } from './play-area-alerts.component';

describe('PlayAreaAlertsComponent', () => {
  let component: PlayAreaAlertsComponent;
  let fixture: ComponentFixture<PlayAreaAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAreaAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
