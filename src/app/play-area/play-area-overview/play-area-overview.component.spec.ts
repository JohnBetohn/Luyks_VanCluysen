import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAreaOverviewComponent } from './play-area-overview.component';

describe('PlayAreaOverviewComponent', () => {
  let component: PlayAreaOverviewComponent;
  let fixture: ComponentFixture<PlayAreaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAreaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
